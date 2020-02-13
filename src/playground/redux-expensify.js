import { createStore, combineReducers } from 'redux'
import uuid from "uuid";

// ADD_EXPENSE
const addExpense = ({ description='', notes='', amount=0, createdAt=0} = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        notes,
        amount,
        createdAt
    }
})

// REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
})

// EDIT EXPENSE
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})
 
// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
})

// SORT_BY_DATE
const sortByDate = () => ({
    type: 'SORT_BY_DATE',
})

// SORT_BY_AMOUNT
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT',
})

// SET_START_DATE
const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
})
// SET_END_DATE
const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
})

// Expense Reducer
const expenseReducerDefault = []
const expensesReducer = (state = expenseReducerDefault, action ) => {
    switch(action.type){
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];
        case 'REMOVE_EXPENSE':
                return state.filter(({ id }) => id !== action.id )
        case 'EDIT_EXPENSE':

            // return state.map((expense) => {
            //     if(expense.id === action.id){
            //         return {
            //             ...expense,
            //             ...action.updates
            //         }
            //     } else {
            //         expense
            //     }
            // })

            var arrayWithEditedItem = []
            for (var i = 0; i < state.length; i++){
                if(state[i].id === action.id){
                    arrayWithEditedItem.push({
                        ...state[i],
                        ...action.updates
                    })
                } else {
                    arrayWithEditedItem.push(state[i])
                }
            }
            return arrayWithEditedItem

            // let toBeEdited = state.find((expense) => {
            //     if(expense.id === action.id){
            //         return {
            //             ...expense,
            //             ...action.axpense
            //         }
            //     }
            // })
            // let arrayWithEditedExpense = []
            // state.forEach((expense) => {
            //     if(expense.id === action.id){
            //         arrayWithEditedExpense.push(toBeEdited)
            //     } else {
            //         arrayWithEditedExpense.push(expense)
            //     }
            // })
            // return arrayWithEditedExpense
        default:
            return state    
    }
}

// Filter Reducer 
const filterReducerDefault = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

const filterReducer = (state = filterReducerDefault, action) => {
    switch(action.type){
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }
        default: 
            return state
    }
}

// Get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        if(expense === undefined) return 
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())

        return startDateMatch && endDateMatch && textMatch
    }).sort((a, b) => {
        if(sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1 : -1
        } else if(sortBy === 'amount'){
            return a.amount < b.amount ? 1 : -1
        }
    })
} 

// Store Creation
const store = createStore(combineReducers({
    expenses: expensesReducer, 
    filters: filterReducer
}))
 
store.subscribe(() => {
   const state = store.getState()
   const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
   console.log(visibleExpenses)
})

const expenseOne = store.dispatch(addExpense({description:'rent', notes:'some important note on rent', amount:400, createdAt:-21000 }))
const expenseTwo = store.dispatch(addExpense({description:'books', notes:'recently got some books', amount:800, createdAt: -1200 }))
const expensethree = store.dispatch(addExpense({description:'vacation', notes:'some important for vacasion days', amount:4000, createdAt:-2000 }))

// store.dispatch(removeExpense({id: expenseOne.expense.id}))

store.dispatch(editExpense(expenseOne.expense.id, { amount: 7000 }))
store.dispatch(editExpense(expensethree.expense.id, {description: 'vacasion to maldives'}))
// store.dispatch(setTextFilter('o'))

// store.dispatch(setTextFilter(''))
// store.dispatch(sortByDate())
// store.dispatch(sortByAmount())

// store.dispatch(setStartDate(0))
// store.dispatch(setStartDate())
// store.dispatch(setEndDate(2250)) 

const demoState = {
    expenses: [{
        id: 'jhkfvhljdslok332',
        description: 'January Rent',
        note: 'This was the final payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }
}

// const user = {
//     name: 'kolawole',
//     age: 23
// }

// console.log({
//     ...user
// })