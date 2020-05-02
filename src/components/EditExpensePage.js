import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { startEditExpense, startRemoveExpense } from '../actions/expense'

export class EditExpensePage extends React.Component {
    startEditExpense = (expense) => {
        this.props.startEditExpense(this.props.expense.id, expense)
        this.props.history.push('/')
    }
    startRemoveExpense = () => {
        this.props.startRemoveExpense({ id: this.props.expense.id })
        this.props.history.push('/')
    }
    render(){
        if(this.props.expense === undefined){
            this.props.history.push('/')
        }
        console.log(this.props.match)
        return (
        <div>
            <div className="page-header">
                <div className="content-container">
                    <h1 className="page-header__title">Edit Expense</h1>
                </div>
             </div>
        <div className="content-container">
             <ExpenseForm 
             expense={this.props.expense} 
             onSubmit={(expense) => {
              this.startEditExpense(expense)
            }}
            />
            <button className="button button--secondary" onClick={this.startRemoveExpense}>Remove Expense</button>
            <br />
         </div>
     </div>
        )
    }
}


const mapStateToProps = (state, props) => ({
    expense: state.expenses.find((expense) => expense.id === props.match.params.id ),
    expenses: state.expenses
})

const mapDispatchToProps = (dispatch) => ({
    startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
    startRemoveExpense: ({ id }) => dispatch(startRemoveExpense({ id }))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage)