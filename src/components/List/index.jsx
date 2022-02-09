import "./style.css";
import Card from "../Card/index";

const List = ({ listTransactions }) => {
  return (
    <>
      <div className="container-filtros">
        <h3>Resumo Financeiro</h3>
        <div className="buttons">
          <button className="todos">Todos</button>
          <button className="entradas">Entradas</button>
          <button className="saidas">Despesas</button>
        </div>
      </div>
      <div className="container-list">
        {listTransactions.map((transaction, index) => (
          <Card transaction={transaction} key={index} />
        ))}
      </div>
    </>
  );
};

export default List;
