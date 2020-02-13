import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { addExpense } from '../actions/expense'

export class AddExpensePage extends React.Component {
  onSubmit = (expense) => {
     this.props.addExpense(expense)
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
      addExpense: (expense) => dispatch(addExpense(expense))
   }
)

export default connect(undefined, matchDispatchToProps)(AddExpensePage)