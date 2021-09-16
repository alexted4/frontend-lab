import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
    title: {
        fontFamily: 'Quicksand',
        background: '#4caf50',
        color: '#CDD6CF'
    },
    content:{
        fontFamily: 'Quicksand',
        padding: '40px 70px 40px 70px',
        textAlign: 'center',
        background: '#e3eae4'
    },
    wrapper:{
        display: 'flex',
        alignContent: 'space-between',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    close: {
        cursor: 'pointer'
    }
  });

export default useStyles;