import { Button } from '@material-ui/core';
import useStyles from './style';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faPowerOff, faHome } from '@fortawesome/free-solid-svg-icons';

const logOut = () => {
    document.cookie = 'username=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    document.cookie = 'token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    window.location.reload();
};

const UserMenu = () => {
    const classes = useStyles();
    const state = useSelector(state => state);

    return (
        <>
            <span className={classes.greeting}>Hello, {state.auth.username}</span>

            <Button variant="outlined" className={classes.logoutButton}>
                {window.location.pathname === '/' ? (
                    <Link className={classes.linkOverride} to="/cocktailSearch">
                        <FontAwesomeIcon icon={faSearch} /> Search
                    </Link>
                ) : (
                    <Link className={classes.linkOverride} to="/">
                        <FontAwesomeIcon icon={faHome} /> Home
                    </Link>
                )}
            </Button>
            <Button onClick={logOut} variant="outlined" className={classes.logoutButton}>
                <span>
                    <FontAwesomeIcon icon={faPowerOff} /> Logout
                </span>
            </Button>
        </>
    );
};

export default UserMenu;
