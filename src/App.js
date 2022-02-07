import './App.css';
import {useState} from 'react';
import Form from './components/Form';
import List from './components/List';
import Card from './components/Card';
import TotalMoney from './components/TotalMoney'

function App() {
  
  const [listTransactions, setListTransactions] = useState([
    { description: "Salário recebido", type: "entrada", value: 2500 },
    { description: "Conta de luz", type: "saída", value: -150 }
  ])

  const storeTransactions = (newTransactions) => {
    setListTransactions([...listTransactions, newTransactions])
    console.log(listTransactions)
  }


  return (
    <div className="App">
      <header className="App-header">
        <Form storeTransactions = {storeTransactions}/>

      


      </header>
    </div>
    

     
      
  );
}

export default App;
