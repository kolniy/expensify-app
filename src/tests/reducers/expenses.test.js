import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'

test('should set default state', () => {
    const state = expensesReducer(undefined, { type:'@@INIT' })
    expect(state).toEqual([])
})

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[0], expenses[2]])
})

test('should remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})

test('should add an expense', () => {
    const action = {
        type: 'ADD_EXPENSE',
        expense: {
            id:'4',
            description: 'ingredients',
            note: 'some note',
            amount: 4000,
            createdAt: 8583
        }
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([...expenses, action.expense])
})

test('should edit an expense', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates: {
            notes: 'something different',
            description: 'some new description'
        }
    }
    const state = expensesReducer(expenses, action)
    expect(state[0]).not.toEqual(expenses[0])
    expect(state[0].notes).toBe(action.updates.notes)
})

test('should not edit expense if id not found', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-30',
        updates: {
            notes: 'something different',
            description: 'some new description'
        }
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})