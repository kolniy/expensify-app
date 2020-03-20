import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { startAddExpense, addExpense, editExpense, removeExpense, setExpenses, startSetExpenses, startRemoveExpense } from '../../actions/expense'
import expenses from '../fixtures/expenses'
import database from '../../firebase/firebase'

const createMockStore = configureMockStore([thunk])

beforeEach((done) => {
    const expenseData = {}
    expenses.forEach(({ id, description, note, amount, createdAt }) => {
        expenseData[id] = { description, note, amount, createdAt }
    })
    database.ref('expenses').set(expenseData).then(() => done())
})

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

test('should setup set expense action object with data', () => {
    const action = setExpenses(expenses)
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses
    })
})

test('should fetch the expenses from firebase', (done) => {
    const store = createMockStore({})
    store.dispatch(startSetExpenses()).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'SET_EXPENSES',
            expenses
        })
        done()
    })
})

test('should remove the expenses from firebase', (done) => {
    const store = createMockStore({})
    store.dispatch(startRemoveExpense({id: expenses[1].id})).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'REMOVE_EXPENSE',
            id: expenses[1].id
        })
        done()
    })
    database.ref(`expenses/${expenses[1].id}`).once('value').then((snapshot) => {
        expect(snapshot.val()).toBeNull()
        done()
    })
})