import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter, { history } from './routers/AppRouter'
import configureStore from './store/configureStore'
import { startSetExpenses } from './actions/expense'
import { login, logout } from './actions/auth'
import './firebase/firebase'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css'
import { firebase } from './firebase/firebase'

const store = configureStore()
console.log('testing')

const jsx = (
    <Provider store={store}>
    <AppRouter />
    </Provider>
)
let hasRendered = false
const renderApp = () => {
    if(!hasRendered){
        ReactDom.render(jsx , document.getElementById('app'))
        hasRendered = true
    }
}
ReactDom.render(<p>Loading...</p> , document.getElementById('app'))

firebase.auth().onAuthStateChanged((user) => {
    if(user){
        store.dispatch(login(user.uid))
        store.dispatch(startSetExpenses()).then(() => {
            renderApp()
            if(history.location.pathname === '/'){
                history.push('/dashboard')
            }
        })
    } else {
       store.dispatch(logout())
       renderApp()
        history.push('/')
    }
})