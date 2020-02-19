import expenseTotal from '../../selectors/expense-total'
import expenses from '../fixtures/expenses'

test('should return 0 for no expenses', () => {
    const sum = expenseTotal([])
    expect(sum).toBe(0)
})

test('should correctly add up a single expense', () => {
    const sum = expenseTotal([expenses[0]])
    expect(sum).toBe(195)
})

test('should correctly add multiple expenses', () => {
    const sum = expenseTotal(expenses)
    expect(sum).toBe(114195)
})