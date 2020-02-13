// Expense Reducer
const expenseReducerDefault = []
export default (state = expenseReducerDefault, action ) => {
    switch(action.type){
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];
        case 'REMOVE_EXPENSE':
                return state.filter(({ id }) => id !== action.id )
        case 'EDIT_EXPENSE':
            // return state.map((expense) => {
                // if(expense.id === action.id){
                //     return {
                //         ...expense,
                //         ...action.updates
                //     }
                // } else {
                //     expense
                // }              
            // })
            var arrayWithEditedItem = []
            for (var i = 0; i < state.length; i++){
                if(state[i].id === action.id){
                    arrayWithEditedItem.push({
                        ...state[i],
                        ...action.updates
                    })
                } else {
                    arrayWithEditedItem.push(state[i])
                }
            }
            return arrayWithEditedItem
        default:
            return state    
    }
}