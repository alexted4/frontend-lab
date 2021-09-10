import { Button } from '@material-ui/core'
import useStyles from './style'
import { useSelector } from 'react-redux'

const logOut = () =>{
    document.cookie = 'username=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;'
    document.cookie = 'token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;'
    window.location.reload()
}

const UserMenu = () => {
    const classes = useStyles()
    const state = useSelector(state => state)
    return (
        <>
            Hello, {state.authenticate.username}
            <Button 
                onClick={logOut} 
                variant="outlined" 
                className={classes.logoutButton}
            > Logout </Button>
        </>
    )
}

export default UserMenu
