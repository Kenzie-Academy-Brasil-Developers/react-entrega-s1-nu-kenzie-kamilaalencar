import "./style.css";
import { useState } from "react";

const Form = ({ storeTransactions }) => {
  const [userInput, setUserInput] = useState({
    description: "",
    type: "Entrada",
    value: "",
  });

  return (
    <div className="container-form">
      <form onSubmit={(event) => event.preventDefault()}>
        <div className="description">
          <label>Descrição</label>
          <input
            placeholder="Digite aqui sua descrição"
            onChange={(event) =>
              setUserInput({ ...userInput, "description": event.target.value })
            }
            type="text"
            value={userInput.description}
          />
          <p>Ex: Compra de roupas</p>
        </div>

        <div className="container-value">
          <div className="value">
            <label>Valor</label>
            <input
              placeholder="1         R$"
              onChange={(event) =>
                setUserInput({ ...userInput, "value": event.target.value })
              }
              type="number"
              value={userInput.value}
            />
          </div>

          <div className="value-type">
            <label>Tipo de valor</label>
            <select
              onChange={(event) =>
                setUserInput({ ...userInput, "type": event.target.value })
              }
              value={userInput.type}
            >
              <option value="Entrada" defaultValue>
                Entrada
              </option>
              <option value="Despesas">Despesas</option>
            </select>
          </div>
        </div>

        <button onClick={() => storeTransactions(userInput)}>
          Inserir valor
        </button>
      </form>
    </div>
  );
};
export default Form;
