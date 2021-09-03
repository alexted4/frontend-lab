import { Dialog, DialogTitle} from '@material-ui/core';
import useStyles from './style.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Auth from '../Auth';
import RandomCocktail from '../RandomCocktail';

const Modal = ({handleClose, open, content}) => {
    const classes = useStyles();
    
    switch (content){
        case "auth": {
            return (
                <Dialog onClose={handleClose} open={open}>
                    <DialogTitle id="modal-title" onClose={handleClose} className={classes.title}>
                            <div className={classes.wrapper}>
                                <div>Authentication</div>
                                <div>
                                    <FontAwesomeIcon
                                        onClick={handleClose} 
                                        icon={faTimes} 
                                        size={'lg'}
                                        className={classes.close}
                                    /> 
                                </div> 
                            </div>
                    </DialogTitle>
                    <div className={classes.content}>
                        <Auth/>
                    </div>
                </Dialog>
            )
        }
        default: {
            return (
                <Dialog onClose={handleClose} open={open}>
                    <DialogTitle id="modal-title" onClose={handleClose} className={classes.title}>
                        <div className={classes.wrapper}>
                            <div>Random Cocktail</div>
                            <div>
                                <FontAwesomeIcon 
                                    align="right" 
                                    onClick={handleClose} 
                                    icon={faTimes} 
                                    size={'lg'}
                                    className={classes.close}
                                />  
                            </div>
                        </div>
                    </DialogTitle>
                    <div className={classes.content}>
                        <RandomCocktail/>
                    </div>
                </Dialog>
            )
        }
    }
}

export default Modal
