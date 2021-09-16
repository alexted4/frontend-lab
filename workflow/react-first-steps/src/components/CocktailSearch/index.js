import {
    TextField,
    Select,
    MenuItem,
    Button,
    Grid,
    InputLabel,
    InputAdornment,
} from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import React, { useState, useEffect } from 'react';
import useStyles from './style.js';
import Joi from 'joi';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../store/index';
import SearchResults from '../SearchResults';
import Loading from '../Loading';
import Modal from '../Modal';
import CocktailById from '../CocktailById';
import _ from 'lodash';

const NAME = 'A cocktail by name';
const FIRST_LETTER = 'A cocktail by first letter';
const INGREDIENT = 'An ingredient';

const CocktailSearch = () => {
    const [searchFor, setSearchFor] = useState(NAME);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchQueryError, setSearchQueryError] = useState('');

    const classes = useStyles();

    const [showModal, setShowModal] = useState(false);
    const [id, setId] = useState('');

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const dispatch = useDispatch();
    const { searchCocktails } = bindActionCreators(actionCreators, dispatch);
    const state = useSelector(state => state);

    const schemaName = Joi.object({
        searchQuery: Joi.string().max(30).required(),
    });

    const schemaFirstLetter = Joi.object({
        searchQuery: Joi.string().max(1),
    });

    const changeSearchQuery = e => {
        setSearchQueryError('');
        setSearchQuery(e.target.value);
    };

    const selectSearchFor = e => {
        setSearchFor(e.target.value);
    };

    const getSearchForQueryName = () => {
        switch (searchFor) {
            case NAME:
                return 's';
            case FIRST_LETTER:
                return 'f';
            case INGREDIENT:
                return 'i';
            default:
                return searchQuery;
        }
    };

    const submitSearch = () => {
        let validation = schemaName.validate({ searchQuery: searchQuery });
        if (searchFor === FIRST_LETTER) {
            validation = schemaFirstLetter.validate({ searchQuery: searchQuery });
        }
        validation.error
            ? setSearchQueryError('Error in query')
            : searchCocktails(getSearchForQueryName(), searchQuery);
    };

    const debouncedSubmitSearch = _.debounce(submitSearch, 1000, {
        trailing: true,
    });

    useEffect(() => {
        searchQuery && debouncedSubmitSearch();
    }, [searchQuery]);

    return (
        <div className={classes.root} align="center">
            <h2>Cocktail Search</h2>
            <Grid className={classes.searchControls} container justifyContent="center">
                <Grid item xs={12} md={1} className={classes.queryDiv}>
                    <InputLabel className={classes.searchForLabel}>Search For</InputLabel>
                    <Select value={searchFor} onChange={selectSearchFor}>
                        <MenuItem value={NAME}>{NAME}</MenuItem>
                        <MenuItem value={FIRST_LETTER}>{FIRST_LETTER}</MenuItem>
                        <MenuItem value={INGREDIENT}>{INGREDIENT}</MenuItem>
                    </Select>
                </Grid>
                <Grid item xs={12} md={2} align="center">
                    <InputLabel className={classes.searchForLabel}>Search Query</InputLabel>
                    <TextField
                        style={{ marginBottom: searchQueryError ? '0px' : '22px' }}
                        error={!!searchQueryError}
                        helperText={searchQueryError}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <FontAwesomeIcon icon={faSearch} />
                                </InputAdornment>
                            ),
                        }}
                        value={searchQuery}
                        onChange={changeSearchQuery}
                    ></TextField>
                </Grid>
                <Grid item xs={12} md={1}>
                    <Button
                        onClick={submitSearch}
                        variant="contained"
                        color="primary"
                        className={classes.searchButton}
                    >
                        Search
                    </Button>
                </Grid>
            </Grid>
            <Grid item align="center" className={classes.results}>
                {state.searchCocktails.loading ? (
                    <Loading />
                ) : (
                    <>
                        <SearchResults
                            items={state.searchCocktails.searchResult}
                            setId={setId}
                            handleOpenModal={handleOpenModal}
                        />
                        <Modal
                            handleCloseModal={handleCloseModal}
                            showModal={showModal}
                            title={'Cocktail'}
                        >
                            <CocktailById id={id} />
                        </Modal>
                    </>
                )}
            </Grid>
        </div>
    );
};

export default CocktailSearch;
