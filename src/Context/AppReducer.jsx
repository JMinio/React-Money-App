export default (state,action) => {
    switch(action.type){
        case "ADD_TRANSACTION":
            return { //el return devuelve el estado vigente, con la modificacion indicada en el PAYLOAD.
                ...state,
                transactions: [...state.transactions, action.payload ]
            }
        case "DELETE_TRANSACTION": //funciona de manera tal que si el ID es diferente al que sugerimos en el payload, se mantiene, sino, se elimina.
            return{
                ...state,
                transactions: state.transactions.filter(t => t.id!== action.payload),
            }
        default: 
            return state
    }
}