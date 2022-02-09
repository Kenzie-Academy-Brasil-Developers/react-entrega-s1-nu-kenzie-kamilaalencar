import { useState } from "react";
import "./App.css";
import logo from "./Nu Kenzie.svg";
import Form from "./components/Form";
import List from "./components/List";
import TotalMoney from "./components/TotalMoney";

function App() {
  const [listTransactions, setListTransactions] = useState([]);

  const storeTransactions = (newTransactions) => {
    typeof newTransactions.value != "number"
      ? (newTransactions.value = parseInt(newTransactions.value))
      : (newTransactions.value = newTransactions.value);
    newTransactions.type === "Despesas"
      ? (newTransactions.value = newTransactions.value * -1)
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
