import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../store/index';

const Toast = ({ message, success }) => {
    const [open, setOpen] = useState(true);

    const handleClose = () => {
        setOpen(false);
    };

    const dispatch = useDispatch();
    const { clearError } = bindActionCreators(actionCreators, dispatch);

    useEffect(() => {
        !open && clearError();
    }, [open]);
    return (
        <Snackbar
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
        >
            <Alert onClose={handleClose} severity={success ? 'success' : 'error'}>
                {message}
            </Alert>
        </Snackbar>
    );
};

export default Toast;
