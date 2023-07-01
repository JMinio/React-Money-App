import { useGlobalState } from "../../Context/GlobalState"

export const TransactionList = () => {
    const {transactions, deleteTransaction} = useGlobalState(); //obtenemos la transaccion y la funcion de eliminarlo del estado global.

    return(
        <>
            {
            transactions.map(t => (
                <div key={t.id}>
                    <p>{t.description}</p>
                    <span>{t.amount}</span>
                    <button onClick={ ()=> {
                        deleteTransaction(t.id) 
                    }
                    }>Delete</button>
                </div>
            ))
            }
        </>
    )
}