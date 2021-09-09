import Routes from './components/routes.js'

import { ThemeProvider } from '@material-ui/core'
import MUICustomTheme from './components/MUICustomTheme.js'
import { useSelector } from 'react-redux'
import Loading from './components/Loading/index.js'

function App() {
  const state = useSelector(state => state)
  
  return (
    <ThemeProvider theme = {MUICustomTheme}>
      {state.authenticate.loading ? <Loading/> : <Routes/>}
    </ThemeProvider>
  );
}

export default App;
