import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import { addExpense, editExpense } from './actions/expense'
import getVisibleExpenses from './selectors/expenses'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css'

const store = configureStore()

const expense1 = store.dispatch(addExpense({description: 'Water Bill', amount: 4500 }))
store.dispatch(addExpense({description: 'Gas Bill', createdAt:1000 , amount: 6000 }))
store.dispatch(addExpense({description: 'Light Bill', amount: 109500 , amount: 450 }))
store.dispatch(addExpense({description: 'Air Bill', amount: 109500 , amount: 700 }))

// setTimeout(() => {
//     store.dispatch(editExpense(expense1.expense.id, {
//         description: "something new"
//     }))
// }, 1500)

const state = store.getState()
console.log(getVisibleExpenses(state.expenses, state.filters))

const jsx = (
    <Provider store={store}>
    <AppRouter />
    </Provider>
)

ReactDom.render(jsx , document.getElementById('app'))