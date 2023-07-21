import { GlobalProvider } from "./Context/GlobalState";
import Balance from "./components/Balance";
import TransactionForm from "./components/Transactions/TransactionForm"
import Header from "./components/Header";
import { TransactionList } from "./components/Transactions/TransactionList";
import IncomeExpenses from "./components/IncomeExpenses";

export default function App() {
  return (
    <GlobalProvider>
      {/* <Header/> */}
      <Balance/>
      <IncomeExpenses/>
      <TransactionForm/>
      <TransactionList/>
    </GlobalProvider>
  )
}
