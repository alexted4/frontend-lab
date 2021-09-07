import { useState } from 'react';
import { Typography, TextField, Grid, DialogContent, DialogActions, Button} from '@material-ui/core';
import useStyles from './style.js'

const Auth = () => {
  const [signIn, setSignIn] = useState(true);
  const classes = useStyles();

  return (
      <Grid container direction="column">
        <form noValidate autoComplete="off">
        <DialogContent>
          <Typography variant = "h4" align="center">
          {signIn ? 'Sign In' : 'Sign Up'}
          </Typography>
          <br/>
          <TextField id="username" label="Username" type = "text"/>
          <br/>
          <TextField id="password" label="Password" type="password"/>
          <Typography variant="subtitle1" align="center" className={classes.switchBlock}>
              {signIn ? "Don't have an account?" : 'Already signed up?'}
              <span formNoValidate onClick={()=>setSignIn(!signIn)} className={classes.switchButton}>
                {signIn ? "Sign up" : 'Go to login'}
              </span>
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button type="submit" variant="contained" color="primary">{signIn ? "Sign In" : 'Sign Up'}</Button>
        </DialogActions>
        </form>
      </Grid> 
  )
}

export default Auth
