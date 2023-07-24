import { GlobalProvider } from "./Context/GlobalState";
import Balance from "./components/Balance";
import TransactionForm from "./components/Transactions/TransactionForm"
import Header from "./components/Header";
import { TransactionList } from "./components/Transactions/TransactionList";
import IncomeExpenses from "./components/IncomeExpenses";

export default function App() {
  return (
    <GlobalProvider>
      <div className="bg-zinc-900 text-white h-screen flex justify-center items-center">
        <div className="bg-zinc-800 p-10 rounded-lg flex"> 
          <div>
            <Header/>
            <Balance/>
            <IncomeExpenses/>
            <TransactionForm/>
          </div>
          <div>
          <TransactionList/>
          </div>
        </div>
      </div>
    </GlobalProvider>
  )
}
