import { GlobalProvider } from "./Context/GlobalState";
import Balance from "./components/Balance";
import TransactionForm from "./components/Transactions/TransactionForm"
import Header from "./components/Header";
import { TransactionList } from "./components/Transactions/TransactionList";

export default function App() {
  return (
    <GlobalProvider>
      <Header/>
      <Balance/>
      <TransactionForm/>
      <TransactionList/>
    </GlobalProvider>
  )
}
