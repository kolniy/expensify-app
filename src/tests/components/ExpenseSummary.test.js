import React from 'react'
import { shallow } from 'enzyme'
import { ExpenseSummary } from '../../components/ExpenseSummary'

test('should correctly render summary for one expense', () => {
    const wrapper = shallow(<ExpenseSummary expenseCount={1} expenseTotal={230} />)
    expect(wrapper).toMatchSnapshot()
})

test('should correctly render summary for multiple expenses', () => {
    const wrapper = shallow(<ExpenseSummary expenseCount={3} expenseTotal={2300} />)
    expect(wrapper).toMatchSnapshot()
})
