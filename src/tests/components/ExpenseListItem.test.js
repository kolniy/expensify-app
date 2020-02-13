import React from 'react'
import { shallow } from 'enzyme'
import ExpenseListItem from '../../components/ExpenseListItem'
import expenses from '../fixtures/expenses'

test('Render expense list with fixtures data', () => {
    const wrapper = shallow(<ExpenseListItem key={expenses[1].id} {...expenses[1]}/>)
    expect(wrapper).toMatchSnapshot()
})