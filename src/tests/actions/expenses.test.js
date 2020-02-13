import { addExpense, editExpense, removeExpense } from '../../actions/expense'

test('should setup remove expense action object', () => {
    const action = removeExpense({ id:'abcd1234' })
    expect(action).toEqual({
        type:'REMOVE_EXPENSE',
        id: 'abcd1234'
    })
});

test('should setup edit expense action object', () => {
    const action = editExpense('123abc', { note:'new note value' })
    expect(action).toEqual({
        type:'EDIT_EXPENSE',
        id: '123abc',
        updates:{
            note: 'new note value'
        }
    })
})

test('should setup add expense action object with provided values', () => {
    const expenseData = {
        description: 'Internet Sub',
        amount: 12000,
        createdAt: 1000,
        notes: ''
    }
    const action = addExpense(expenseData)
       expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
})

test('should setup add expense action object with default values', () => {
    const expenseDefault = {
        description:'',
        notes:'',
        amount:0,
        createdAt:0
    }
    const action = addExpense()
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseDefault,
            id:expect.any(String)
        }
    })
})