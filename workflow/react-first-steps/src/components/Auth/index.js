import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../store/index';
import {
    Typography,
    TextField,
    Grid,
    DialogContent,
    DialogActions,
    Button,
} from '@material-ui/core';
import useStyles from './style.js';

const Joi = require('joi');

const Auth = () => {
    const [signIn, setSignIn] = useState(true);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const dispatch = useDispatch();
    const { login, register } = bindActionCreators(actionCreators, dispatch);

    const schema = Joi.object({
        username: Joi.string().alphanum().min(3).max(30).required(),

        password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    }).with('username', 'password');

    const validateData = () => {
        const validation = schema.validate({
            username: username,
            password: password,
        });
        if (validation.error) {
            const error = validation.error.details[0];
            error.context.key === 'username'
                ? setUsernameError(
                      'Username must be at least 3 characters and can only contain letters and/or numbers'
                  )
                : setPasswordError(
                      'Password must be at least 3 characters and can only contain letters and/or numbers'
                  );
        }
    };

    const updateUsername = e => {
        setUsernameError();
        setUsername(e.target.value);
    };

    const updatePassword = e => {
        setPasswordError();
        setPassword(e.target.value);
    };

    const postData = () => {
        validateData();
        if (!passwordError && !usernameError) {
            const data = { name: username, password: password };
            signIn ? login(data) : register(data);
        }
    };

    const classes = useStyles();
    return (
        <Grid container direction="column">
            <form autoComplete="off" className={classes.container}>
                <DialogContent>
                    <Typography variant="h4" align="center">
                        {signIn ? 'Sign In' : 'Sign Up'}
                    </Typography>
                    <br />
                    <TextField
                        className={classes.input}
                        error={!!usernameError}
                        helperText={usernameError}
                        style={{
                            marginBottom: usernameError ? '0px' : '41px',
                        }}
                        id="username"
                        label="Username"
                        type="text"
                        value={username}
                        onChange={updateUsername}
                        onBlur={validateData}
                    />
                    <br />
                    <TextField
                        className={classes.input}
                        error={!!passwordError}
                        helperText={passwordError}
                        style={{
                            marginBottom: passwordError ? '0px' : '41px',
                        }}
                        id="password"
                        label="Password"
                        type="password"
                        value={password}
                        onChange={updatePassword}
                        onBlur={validateData}
                    />
                    <Typography variant="subtitle1" align="center" className={classes.switchBlock}>
                        {signIn ? "Don't have an account?" : 'Already signed up?'}
                        <span onClick={() => setSignIn(!signIn)} className={classes.switchButton}>
                            {signIn ? 'Sign up' : 'Go to login'}
                        </span>
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={postData} variant="contained" color="primary">
                        {signIn ? 'Sign In' : 'Sign Up'}
                    </Button>
                </DialogActions>
            </form>
        </Grid>
    );
};

export default Auth;
