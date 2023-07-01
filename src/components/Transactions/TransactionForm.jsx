import { useState } from "react";
import { useGlobalState } from "../../Context/GlobalState";

function TransactionForm() {

  const {addTransaction} = useGlobalState()
  const [description, setDescription] = useState();
  const [amount, setAmount] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault();
    
    addTransaction({
      id: window.crypto.randomUUID(), //biblioteca de google para generar ID unicos
      description,
      amount: +amount     //lo que hace el +, es que convierte el texto de string a number.
    });
    
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>Description:
          <input 
          type="text"
          onChange={(e) => setDescription(e.target.value)} 
          placeholder="Enter a description" />
        </label>
        <label>Amount:
          <input
          step="0.01"
          type="number" 
          placeholder="Enter an amount"
          onChange={(e)=>setAmount(e.target.value)}
          />
        </label>
        <button>
          Add Transaction
        </button>
      </form>
    </div>
  )
}

export default TransactionForm