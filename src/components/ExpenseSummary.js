import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import numeral from 'numeral'
import expenseSelector from '../selectors/expenses'
import expenseTotal from '../selectors/expense-total'

export const ExpenseSummary = (prop) => {
    const expenseWord = prop.expenseCount === 1 ? 'expense' : 'expenses'
    return (
    <div className="page-header">
       <div className="content-container">
        <h1 className="page-header__title">Viewing <span className="page-header__title-bold">{prop.expenseCount}</span> {expenseWord} totalling <span className="page-header__title-bold">{numeral(prop.expenseTotal / 100).format('$0,0.00')}</span></h1>
        <div className="page-header__actions">
           <Link className="button" to="/create">Add Expense</Link>
        </div>
    </div>
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