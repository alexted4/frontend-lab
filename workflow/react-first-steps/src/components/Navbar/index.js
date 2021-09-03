import  useStyles from './style.js';
import { AppBar, Toolbar, Typography, Button, Box } from '@material-ui/core';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCocktail } from '@fortawesome/free-solid-svg-icons';
import Modal from '../Modal'
import Auth from '../Auth'

const Navbar = () => {
    const [showModal, setShowModal] = useState(false);
    const classes = useStyles();
    
    const handleOpenModal = () =>{
        setShowModal(true)
    };

    const handleCloseModal = () =>{
        setShowModal(false)
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
                    <Button onClick={handleOpenModal} variant="outlined" className={classes.navButton}>Get Started</Button>
                </Toolbar>
            </AppBar>
            <Modal 
                handleCloseModal={handleCloseModal} 
                showModal={showModal}
                title={'Authentication'}
            >
                <Auth/>
            </Modal>
        </>
    )
}

export default Navbar