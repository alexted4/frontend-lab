import  useStyles from './style.js';
import { AppBar, Toolbar, Typography, Button, Box } from '@material-ui/core';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCocktail } from '@fortawesome/free-solid-svg-icons';
import Modal from '../Modal'

const Navbar = () => {
    const [open, setOpen] = React.useState(false);
    const classes = useStyles();
    
    const handleClickOpen = () =>{
        setOpen(true);
    };

    const handleClose = () =>{
        setOpen(false);
    };

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <Box flexGrow={1}>
                        <FontAwesomeIcon icon = {faCocktail} size = "2x"/>
                        <Typography variant="h4" className={classes.heading}>
                            Cocktail App
                        </Typography>
                    </Box>
                    <Button onClick={()=>handleClickOpen()} variant="outlined" className={classes.navButton}>Get Started</Button>
                </Toolbar>
            </AppBar>
            <Modal 
                handleClose={handleClose} 
                open={open}
                content={'auth'}
            />
        </>
    )
}

export default Navbar