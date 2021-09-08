import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
    table:{
        "& table":{
            width: '100%',
            textAlign: 'center'
        },
        "& td": {
            padding: '10px 20px 10px 20px',
            textAlign: 'center',
            borderTop: '1px solid #333',
            margin: 0,
        }
    },
    ingredient: {
        borderLeft: '1px solid #333',
        borderRight: '1px solid #333'
    },
    thumbnail:{
        maxWidth: '200px',
        filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
        borderRadius: '5px',
        marginTop: '40px'
    },
    favorite:{
        marginLeft: '10px',
        position: 'absolute',
        top: 80
    },
    instructions:{
        marginTop: '20px'
    }
  });

export default useStyles;