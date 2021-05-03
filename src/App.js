import React from 'react'
import './App.css';
import {Header} from './components/Header'
import {Balance} from './components/Balance'
import {ProgressBar} from './components/Progress_Bar'
import {Income_Expenses} from './components/Income_Expenses'
import {AddTransaction} from './components/AddTransaction'
import {TransactionList} from './components/TransactionList'
import {GlobalProvider} from './context/GlobalState'

function App() {
  return (
    <GlobalProvider>
    <div>
     <Header/>
     <div className = "container">
     <Balance/>
     <ProgressBar/>
     <Income_Expenses/>
     <TransactionList/>
     <AddTransaction/>

     </div>
    </div>
    </GlobalProvider>
  );
}

export default App;
