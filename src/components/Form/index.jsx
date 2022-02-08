import "./style.css";
import { useState } from "react";

const Form = ({ storeTransactions }) => {
  const [userInput, setUserInput] = useState({
    description: "",
    type: "entrada",
    value: 0,
  });

  return (
    <div className="container-form">
      <form>
        <label className="description">
          Descrição
          <input
            placeholder="Digite aqui sua descrição"
            onChange={(event) =>
              setUserInput({ ...userInput, description: event.target.value })
            }
            type="text"
            value={userInput.description}
          />
          <p>Ex:Compra de roupas</p>
        </label>

        <label className="value">
          Valor
          <input
            placeholder="1         R$"
            onChange={(event) =>
              setUserInput({ ...userInput, value: event.target.value })
            }
            type="number"
            value={userInput.value}
          />
        </label>

        <label className="value-type">
          Tipo de valor
          <select
            onChange={(event) =>
              setUserInput({ ...userInput, type: event.target.value })
            }
            value={userInput.type}
          >
            <option value="Entrada" defaultValue>
              Entrada
            </option>
            <option value="Saída">Saída</option>
          </select>
        </label>
        <button onClick={() => storeTransactions(userInput)}>
          Inserir valor
        </button>
      </form>
    </div>
  );
};
export default Form;
