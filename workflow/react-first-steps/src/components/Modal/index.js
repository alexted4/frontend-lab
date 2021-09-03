import { Dialog, DialogTitle} from '@material-ui/core';
import useStyles from './style.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Modal = ({handleCloseModal, showModal, title, children}) => {
    const classes = useStyles();
    return (
        <Dialog onClose={handleCloseModal} open={showModal}>
            <DialogTitle id="modal-title" onClose={handleCloseModal} className={classes.title}>
                    <div className={classes.wrapper}>
                        <div>{title}</div>
                        <div>
                            <FontAwesomeIcon
                                onClick={handleCloseModal} 
                                icon={faTimes} 
                                size={'lg'}
                                className={classes.close}
                            /> 
                        </div> 
                    </div>
            </DialogTitle>
            <div className={classes.content}>
                {children}
            </div>
        </Dialog>
    )  
}

export default Modal
