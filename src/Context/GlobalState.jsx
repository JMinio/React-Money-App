import { createContext, useContext, useReducer, useEffect} from "react";
import AppReducer from  "./AppReducer";

export const Context =  createContext() //creamos el contexto

export const useGlobalState = () => { //con esta funcion no hace falta llamar al Context en los modulos.
    const context = useContext(Context) 
    return context;
}

const initialState = {
    transactions: []
}

export const  GlobalProvider =({children}) => { 
    const [state, dispatch] = useReducer(AppReducer, initialState, () => {
        
        const getLocalData = localStorage.getItem("transactions")
        return getLocalData ? JSON.parse(getLocalData) : initialState;
    });

    useEffect(() => {
        localStorage.setItem("transactions", JSON.stringify(state))
    }, [state])

    
    const addTransaction = (transaction) => {
        dispatch({
            type:"ADD_TRANSACTION",
            payload: transaction
        })
    }
    const deleteTransaction = (id) => {
        dispatch({
            type:"DELETE_TRANSACTION",
            payload: id
        })
    }

return <Context.Provider value={{
    transactions: state.transactions,
    addTransaction,
    deleteTransaction
}}> {/* todo dentro del provider puede leer el value */}
        {children}
    </Context.Provider>
}
