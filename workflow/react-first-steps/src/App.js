import Routes from './components/routes.js'

import { ThemeProvider } from '@material-ui/core'
import MUICustomTheme from './components/MUICustomTheme.js'
import { useEffect } from 'react'
import { useDispatch } from "react-redux"
import { bindActionCreators } from 'redux'
import { actionCreators } from './store/index'

function App() {
  const dispatch = useDispatch()
  const {getInitialState} = bindActionCreators(actionCreators, dispatch)

  useEffect(()=>{
    getInitialState()
  }, [])
  return (
    <ThemeProvider theme = {MUICustomTheme}>
      <Routes/> 
    </ThemeProvider>
  );
}

export default App;
