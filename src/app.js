import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import './firebase/firebase'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css'

const store = configureStore()
console.log('testing')

const jsx = (
    <Provider store={store}>
    <AppRouter />
    </Provider>
)

ReactDom.render(jsx , document.getElementById('app'))