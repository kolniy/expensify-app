import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { startAddExpense, addExpense, editExpense, removeExpense } from '../../actions/expense'
import expenses from '../fixtures/expenses'
import database from '../../firebase/firebase'

const createMockStore = configureMockStore([thunk])

test('should setup remove expense action object', () => {
    const action = removeExpense({ id:'abcd1234' })
    expect(action).toEqual({
        type:'REMOVE_EXPENSE',
        id: 'abcd1234'
    })
});

test('should setup edit expense action object', () => {
    const action = editExpense('123abc', { notes:'new note value' })
    expect(action).toEqual({
        type:'EDIT_EXPENSE',
        id: '123abc',
        updates:{
            notes: 'new note value'
        }
    })
})

test('should setup add expense action object with provided values', () => {
    const action = addExpense(expenses[1])
       expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense: expenses[1]
    })
})

test('should add expense to database and store', (done) => {
    const store = createMockStore({})
    const expenseData = { 
        description: 'mouse',
        amount: 3000,
        note: 'this one is better',
        createdAt: 1000
    }

    store.dispatch(startAddExpense(expenseData)).then(() => {
       const actions = store.getActions()
       expect(actions[0]).toEqual({
           type: 'ADD_EXPENSE',
           expense: {
            id: expect.any(String),
            ...expenseData
           }
       })
        return database.ref(`expenses/${actions[0].expense.id}`).once('value')
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData)
        done()
    })
})


test('should add expense with defaults to database and store', (done) => {
    const store = createMockStore({})
    const expenseDefauls = { 
        description: '',
        amount: 0,
        note: '',
        createdAt: 0
    }

    store.dispatch(startAddExpense({})).then(() => {
       const actions = store.getActions()
       expect(actions[0]).toEqual({
           type: 'ADD_EXPENSE',
           expense: {
            id: expect.any(String),
            ...expenseDefauls,
           }
       })
        return database.ref(`expenses/${actions[0].expense.id}`).once('value')
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseDefauls)
        done()
    })
})

// test('should setup add expense action object with default values', () => {
//     const expenseDefault = {
//         description:'',
//         notes:'',
//         amount:0,
//         createdAt:0
//     }
//     const action = addExpense()
//     expect(action).toEqual({
//         type: 'ADD_EXPENSE',
//         expense: {
//             ...expenseDefault,
//             id:expect.any(String)
//         }
//     })
// })