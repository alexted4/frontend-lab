import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        transition: 'all .5s',
        background: '#e3eae4',
        '&:nth-of-type(even)': {
            backgroundColor: '#d5ded7',
            color: '#ddd!important',
        },
        '&:hover': {
            backgroundColor: '#ebf5ed',
        },
        '& img': {
            maxWidth: '70px',
            borderRadius: '3px',
        },
        '& td': {
            paddingLeft: '20px',
            paddingRight: '20px',
            borderTop: '1px solid #555',
            cursor: 'pointer',
        },
    },
});

export default useStyles;
