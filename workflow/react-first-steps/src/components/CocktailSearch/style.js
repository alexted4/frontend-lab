import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    root: {
        '& h2': {
            fontFamily: 'Rochester',
            color: '#555',
            fontSize: '36px',
        },
        '& .MuiSelect-root': {
            minWidth: '180px',
        },
    },
    searchForLabel: {
        fontSize: '13px',
        marginTop: '10px',
        marginBottom: '5px',
    },
    queryDiv: {
        minWidth: '200px',
    },
    results: {
        marginTop: '20px',
    },
    searchButton: {
        marginTop: '20px',
        minWidth: '180px',
    },
});

export default useStyles;
