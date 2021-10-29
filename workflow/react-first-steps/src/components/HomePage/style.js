import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    image: {
        width: '90%',
        height: '450px',
        objectFit: 'contain',
        objectPosition: 'center',
        filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
    },
    imageText: {
        color: '#555',
        width: '180px',
        height: '40px',
        fontSize: '16px',
        lineHeight: '18px',
        marginLeft: '110px',
        marginTop: '-20px',
        transform: 'rotate(-15.81deg)',
    },
    quotes: {
        marginTop: '150px',
        animationTimingFunction: 'linear',
        animationDuration: '1000ms',
        animationDelay: '3000ms',
        animationDirection: 'normal',
    },
});

export default useStyles;
