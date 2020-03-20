import React from 'react'
import { shallow } from 'enzyme'
import { EditExpensePage } from '../../components/EditExpensePage'
import expenses from '../fixtures/expenses'

let startEditExpense, startRemoveExpense, history, wrapper

beforeEach(() => {
    startEditExpense = jest.fn()
    startRemoveExpense = jest.fn()
    history = { push: jest.fn()}
    wrapper = shallow(
        <EditExpensePage startEditExpense={startEditExpense}
        startRemoveExpense={startRemoveExpense} 
        history={history} 
        expense={expenses[0]} 
    />)
})

test('should render expense page', () => {
    expect(wrapper).toMatchSnapshot()
})

test('component should handle StartEditExpense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0])
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(startEditExpense).toHaveBeenLastCalledWith(expenses[0].id, expenses[0])
})

test('component should handle stratRemoveExpense', () => {
    wrapper.find('button').simulate('click')
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(startRemoveExpense).toHaveBeenCalledWith({ id: expenses[0].id })
})