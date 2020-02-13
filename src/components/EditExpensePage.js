import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { editExpense, removeExpense } from '../actions/expense'

export class EditExpensePage extends React.Component {
    editExpense = (expense) => {
        this.props.editExpense(this.props.expense.id, expense)
        this.props.history.push('/')
    }
    removeExpense = () => {
        this.props.removeExpense({ id: this.props.expense.id })
        this.props.history.push('/')
    }
    render(){
        if(this.props.expense === undefined){
            this.props.history.push('/')
        }
        return (
            <div>
            <ExpenseForm 
             expense={this.props.expense} 
             onSubmit={(expense) => {
              this.editExpense(expense)
            }}
            />
            <button onClick={this.removeExpense}>Remove</button>
        </div>
        )
    }
}


const mapStateToProps = (state, props) => ({
    expense: state.expenses.find((expense) => expense.id === props.match.params.id ),
    expenses: state.expenses
})

const mapDispatchToProps = (dispatch) => ({
    editExpense: (id, expense) => dispatch(editExpense(id, expense)),
    removeExpense: ({ id }) => dispatch(removeExpense({ id }))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage)