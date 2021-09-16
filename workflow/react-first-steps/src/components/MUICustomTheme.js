import { createTheme } from '@material-ui/core/styles';

const MUICustomTheme = createTheme({
    palette: {
        primary: {
            main: '#4caf50',
            contrastText: '#ddd',
        },
        secondary: {
            main: '#1b5e20',
        },
    },
    overrides: {
        MuiButton: {
            text: {
                fontFamily: 'Asap',
                textTransform: 'none',
                borderRadius: '10px',
                padding: '10px 20px 10px 20px',
            },
        },
        MuiTypography: {
            h1: {
                fontFamily: 'Rochester',
                color: '#4caf50',
                marginTop: '20px',
            },
            h4: {
                fontFamily: 'Rochester',
                display: 'inline-block',
            },
            h6: {
                fontFamily: 'Asap',
                weight: 400,
                textTransform: 'capitalize',
            },
        },
    },
});

export default MUICustomTheme;
