import { useState, useRef } from 'react';
import { Grid, Typography } from '@material-ui/core';
import useStyles from './style.js';
import Modal from '../Modal';
import quotes from './quotes';
import { makeStyles } from '@material-ui/core';
import RandomCocktail from '../RandomCocktail/index.js';
import { useInterval } from '../hooks/useInterval';

const useAnimation = makeStyles(theme => ({
    animatedItem: {
        animation: `$myEffect 4000ms ${theme.transitions.easing.easeInOut}`,
    },
    animatedItemExiting: {
        animation: `$myEffectExit 4000ms ${theme.transitions.easing.easeInOut}`,
        opacity: 0,
        transform: 'translateY(-200%)',
    },
    '@keyframes myEffect': {
        '0%': {
            opacity: 0,
            transform: 'translateY(-200%)',
        },
        '100%': {
            opacity: 1,
            transform: 'translateY(0)',
        },
    },
    '@keyframes myEffectExit': {
        '0%': {
            opacity: 1,
            transform: 'translateY(0)',
        },
        '100%': {
            opacity: 0,
            transform: 'translateY(200%)',
        },
    },
}));

const HomePage = () => {
    const classes = useStyles();
    const animation = useAnimation();
    const quoteRef = useRef();

    const [quote, setQuote] = useState(quotes[0]);
    const [currentQuote, setCurrentQuote] = useState(1);

    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const rotateQuote = () => {
        setCurrentQuote(currentQuote + 1);
        if (currentQuote > quotes.length - 2) {
            setCurrentQuote(0);
        }
        setQuote(quotes[currentQuote]);
    };

    useInterval(() => {
        quoteRef.current.className = animation.animatedItemExiting;
    }, 4000);

    useInterval(() => {
        quoteRef.current.className = animation.animatedItem;
        rotateQuote();
    }, 8000);

    return (
        <>
            <Grid container justifyContent="space-evenly">
                <Grid item xs={12} align="center">
                    <Typography variant="h1">Cocktail App</Typography>
                </Grid>
                <Grid item xs={8} sm={6} md={3} align="center" className={classes.quotes}>
                    <Typography variant="h6" color="secondary">
                        <div ref={quoteRef} className={animation.animatedItem}>
                            {quote}
                        </div>
                    </Typography>
                </Grid>
                <Grid item xs={8} sm={6} md={3} align="center">
                    <img
                        onClick={handleOpenModal}
                        className={classes.image}
                        src="/cocktail1.svg"
                        alt="Get random cocktail"
                    ></img>
                    <Typography variant="subtitle1" className={classes.imageText}>
                        Press on glass to get a random cocktail
                    </Typography>
                </Grid>
            </Grid>
            <Modal
                handleCloseModal={handleCloseModal}
                showModal={showModal}
                title={'Random Cocktail'}
            >
                <RandomCocktail />
            </Modal>
        </>
    );
};

export default HomePage;
