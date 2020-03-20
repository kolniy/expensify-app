import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import expensesReducer from '../reducers/expenses'
import filterReducer from '../reducers/filters'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default () => {
    const store = createStore(combineReducers({
        expenses: expensesReducer, 
        filters: filterReducer
    }), 
    composeEnhancers(applyMiddleware(thunk)) // the thunk middleware from the redux-thunk module allows us to dispatch a function insead of as usual object
   )
     return store
}

// Store Creation

 