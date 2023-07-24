import TransactionItems from "./TransactionItems";
import { useGlobalState } from "../../Context/GlobalState";

export const TransactionList = () => {
    const { transactions } = useGlobalState(); //obtenemos la transaccion y la funcion de eliminarlo del estado global.

    return (
        <>
            <h3>Historial</h3>
            <ul>
                {transactions.map((t) => (
                    <TransactionItems t={t} key={t.id} />
                ))}
            </ul>
        </>
    )
}