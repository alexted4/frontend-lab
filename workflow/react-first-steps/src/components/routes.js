import React from 'react'
import Loading from './Loading'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

const Navbar = React.lazy(() => import('./Navbar'))
const HomePage = React.lazy(() => import('./HomePage'))
const CocktailSearch = React.lazy(() => import('./CocktailSearch'))

const Page404 = React.lazy(() => import('./Page404'))
const Page403 = React.lazy(() => import('./Page403'))

const routes = ({token}) => {

    return (
        <React.Suspense fallback = {<Loading/>}>
            <Router>
                <Switch> 
                    <Route exact path = "/">
                        <Navbar/>
                        <HomePage/>
                    </Route>
                    <Route exact path = "/cocktailSearch">
                        {token ? 
                        <React.Fragment>
                            <Navbar/>
                            <CocktailSearch/>
                        </React.Fragment> : 
                        <Page403/>}
                    </Route>
                    <Route path = "*">
                        <Page404/>
                    </Route>
                </Switch>
            </Router>
        </React.Suspense>
    )
}

export default routes
