import { useGlobalState } from "../Context/GlobalState";

function Balance() {

    const {transactions} = useGlobalState() //usamos useContext para usar ese contexto
    
    const amounts = transactions.map((t)=> t.amount)
                                  //funcion recibe acc, item y realiza dicha accion con valor inicial 0
    const total = amounts.reduce((acumulador, item) => (acumulador += item), 0)

  return (
    <div>
        <h1>Balance</h1> 
        <h2>Transactions</h2>
        {
          JSON.stringify(total, null, 2)
        }    
    </div>
  )
}

export default Balance