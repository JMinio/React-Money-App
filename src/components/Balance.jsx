import { useGlobalState } from "../Context/GlobalState";

function Balance() {

    const {transactions} = useGlobalState()

    const amounts = transactions.map((t)=> t.amount) //recorrido mostrando un array con los amounts de cada transactions
                                  //funcion recibe acc, item y realiza dicha accion con valor inicial 0
    const total = amounts.reduce((acumulador, item) => (acumulador += item), 0)

  return (
    <div>
        <h1>Tu saldo:</h1> 
        <h2>${total}</h2>
    </div>
  )
}

export default Balance