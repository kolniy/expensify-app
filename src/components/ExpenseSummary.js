import React from 'react'
import { connect } from 'react-redux'
import numeral from 'numeral'
import expenseSelector from '../selectors/expenses'
import expenseTotal from '../selectors/expense-total'

export const ExpenseSummary = (prop) => {
    const expenseWord = prop.expenseCount === 1 ? 'expense' : 'expenses'
    return (
        <div>
        <h1>Viewing {prop.expenseCount} {expenseWord} totalling {numeral(prop.expenseTotal / 100).format('$0,0.00')}</h1>
        </div>
    )
}

const mapStateToProp = (state) => {
    return {
        expenseCount: expenseSelector(state.expenses, state.filters).length,
        expenseTotal: expenseTotal(expenseSelector(state.expenses, state.filters))
    }
}

export default connect(mapStateToProp)(ExpenseSummary)