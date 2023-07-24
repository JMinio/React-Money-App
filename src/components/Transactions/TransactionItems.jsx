import { useGlobalState } from "../../Context/GlobalState";

export function TransactionItems ({t}) {
    
    const {deleteTransaction} = useGlobalState  ();
    
    return (
        <li className="bg-zinc-600 text-white px-3 py-1 rounded-lg mb-2 w-full flex justify-between items-center ">
            <p>{t.description}</p>
            <div>
                <span>${t.amount}</span>
                <button onClick={() => {
                    deleteTransaction(t.id)
                }
                }>Delete</button>
            </div>
        </li>
    )
}

export default TransactionItems