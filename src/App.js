import { useState } from "react";
import "./App.css";
import logo from "./Nu Kenzie.svg";
import Form from "./components/Form";
import List from "./components/List";
import TotalMoney from "./components/TotalMoney";

function App() {
  const [listTransactions, setListTransactions] = useState([
    { description: "Salário recebido", type: "entrada", value: 2500 },
    { description: "Conta de luz", type: "saída", value: -150 },
  ]);

  const storeTransactions = (newTransactions) => {
    typeof newTransactions.value != "number"
      ? (newTransactions.value = parseInt(newTransactions.value))
      : (newTransactions.value = newTransactions.value);
    setListTransactions([...listTransactions, newTransactions]);
  };

  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <button>Inicio</button>
      </header>
      <main>
        <div>
          <Form storeTransactions={storeTransactions} />
          <TotalMoney listTransactions={listTransactions} />
        </div>
        <div>
          <List listTransactions={listTransactions} />
        </div>
      </main>
    </div>
  );
}

export default App;
