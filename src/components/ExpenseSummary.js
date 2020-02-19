import React from 'react'
import { connect } from 'react-redux'
import numeral from 'numeral'
import expenseSelector from '../selectors/expenses'
import expenseTotal from '../selectors/expense-total'

export const ExpenseSummary = (prop) => {
    return (
        <div>
            {
            prop.expenseCount === 1 ? (
            <p>Viewing {prop.expenseCount} expense totalling {numeral(prop.expenseTotal / 100).format('$0,0.00')}</p>) :
             (<p>Viewing {prop.expenseCount} expenses totalling {numeral(prop.expenseTotal / 100).format('$0,0.00')}
             </p>)
             }
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