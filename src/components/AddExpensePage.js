import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { startAddExpense } from '../actions/expense'

export class AddExpensePage extends React.Component {
  onSubmit = (expense) => {
     this.props.startAddExpense(expense)
     this.props.history.push('/')
   }

   render(){
      return (
         <div>
       <h2>Add Expense</h2>
       <ExpenseForm onSubmit={this.onSubmit} />
    </div>
      )
   }
}

const matchDispatchToProps = (dispatch) => (
   {
      startAddExpense: (expense) => dispatch(startAddExpense(expense))
   }
)

export default connect(undefined, matchDispatchToProps)(AddExpensePage)