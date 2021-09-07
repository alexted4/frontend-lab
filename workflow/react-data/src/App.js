import Routes from './components/routes.js'

import { ThemeProvider } from '@material-ui/core'
import MUICustomTheme from './components/MUICustomTheme.js'

function App() {
  return (
    <ThemeProvider theme = {MUICustomTheme}>
      <Routes/>
    </ThemeProvider>
  );
}

export default App;