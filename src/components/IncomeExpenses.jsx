import { useGlobalState } from "../Context/GlobalState"

function IncomeExpenses() {

    const { transactions } = useGlobalState();

    const amounts = transactions.map((t) => t.amount);

    const income = amounts
        .filter((item) => item > 0) //filtrado de valores mayores a 0 para ingresos
        .reduce((acc, item) => (acc += item), 0) //con reduce juntamos el valor anterior y siguiente, para asi sumarlos y acumularlos.

    const expenses = amounts
        .filter((item) => item < 0) //filtrado de valores mayores a 0 para ingresos
        .reduce((acc, item) => (acc += item), 0) //con reduce juntamos el valor anterior y siguiente, para asi sumarlos y acumularlos.

    console.log(income)
    return (
        <>
            <h4>Ingresos</h4>
            <h3>{income}</h3>
            <h4>Gastos</h4>
            <h3>{expenses}</h3>
        </>
    )
}

export default IncomeExpenses