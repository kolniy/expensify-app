import uuid from 'uuid'
import database from '../firebase/firebase'

// ADD_EXPENSE
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
})

export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const {
            description='',
            note='',
            amount=0,
            createdAt=0
        } = expenseData
        const expense = { description, note, amount, createdAt }
        return database.ref('expenses').push(expense).then((ref) => { // returns a promise. makes it possible to attach a .then() fuction when the start add expense is dispatched
        dispatch(addExpense({
            id: ref.key,
            ...expense
        }))
      })
    }
}

// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
})

// EDIT EXPENSE
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})

// SET EXPENSES
export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
})

// START SET EXPENSES
export const startSetExpenses = () => {
    return (dispatch) => {
       return database.ref('expenses').once('value').then((snapshot) => { // returns a promise. makes it possible to attach a .then() fuction when the start set expense is dispatched
            const expenseData = []
            
            snapshot.forEach((childSnapShot) => {
                expenseData.push({
                    id: childSnapShot.key,
                    ...childSnapShot.val()
                })
            })
            dispatch(setExpenses(expenseData))
        })
    }
}

export const startRemoveExpense = ({ id }) => {
    return (dispatch) => {
        return database.ref(`expenses/${id}`).remove().then(() => {  // returns a promise. makes it possible to attach a .then() fuction when the start remove expense is dispatched
            dispatch(removeExpense({ id }))
        })
    }
}