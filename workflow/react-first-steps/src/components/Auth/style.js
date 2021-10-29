import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    switchBlock: {
        marginTop: '10px',
    },
    switchButton: {
        marginLeft: '4px',
        background: 'none',
        border: 'none',
        color: '#4caf50',
        fontSize: '17px',
        '&:hover': {
            color: 'black',
            cursor: 'pointer',
            transition: '.3s ease-in-out',
        },
    },
    input: {
        width: '270px',
    },
    container: {
        minWidth: '320px',
    },
});

export default useStyles;
