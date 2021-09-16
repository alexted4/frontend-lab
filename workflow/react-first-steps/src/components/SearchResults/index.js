import IngredientFull from '../IngredientFull';
import SearchResult from '../SearchResult';
import useStyles from './style';
import { useState } from 'react';
import {
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    TablePagination,
} from '@material-ui/core';

const ROWS_PER_PAGE = 10;

const SearchResults = ({ items, setId, handleOpenModal }) => {
    const classes = useStyles();
    const [page, setPage] = useState(0);

    const buildResultTable = () => {
        const result = [];
        for (let i = page * ROWS_PER_PAGE; i < page * ROWS_PER_PAGE + ROWS_PER_PAGE; i++) {
            items.drinks[i] &&
                result.push(
                    <SearchResult
                        key={items.drinks[i].idDrink}
                        item={items.drinks[i]}
                        setId={setId}
                        handleOpenModal={handleOpenModal}
                        i={i}
                    />
                );
        }
        return result;
    };

    const handlePagination = (event, page) => {
        setPage(page);
    };

    if (items.drinks) {
        return (
            <Table className={classes.root}>
                <TableHead>
                    <TableRow className={classes.row}>
                        <TableCell>#</TableCell>
                        <TableCell>ID</TableCell>
                        <TableCell>Thumbnail</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Category</TableCell>
                        <TableCell>Glass</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {buildResultTable()}
                    <TableRow className={classes.row}>
                        <TablePagination
                            page={page}
                            rowsPerPage={ROWS_PER_PAGE}
                            rowsPerPageOptions={[]}
                            count={items.drinks.length}
                            onPageChange={handlePagination}
                        />
                    </TableRow>
                </TableBody>
            </Table>
        );
    } else if (items.ingredients) {
        return <IngredientFull item={items.ingredients[0]} />;
    } else {
        return 'No results to display';
    }
};

export default SearchResults;
