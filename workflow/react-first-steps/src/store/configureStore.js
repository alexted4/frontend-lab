import { applyMiddleware, createStore, compose } from 'redux'
import reducers from './reducers'
import thunk from 'redux-thunk'

export default function configureStore(preloadedState) {
    const middlewares = [thunk]
    const middlewareEnhancer = applyMiddleware(...middlewares)
  
    const enhancers = [middlewareEnhancer] || compose;
    const composedEnhancers = compose(...enhancers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  
    const store = createStore(reducers, preloadedState, composedEnhancers)

    if (process.env.NODE_ENV !== 'production' && module.hot) {
        module.hot.accept('./reducers', () => store.replaceReducer(reducers))
    }
  
    return store
}