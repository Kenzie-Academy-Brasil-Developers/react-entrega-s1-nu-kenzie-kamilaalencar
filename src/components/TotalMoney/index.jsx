import "./style.css";

const TotalMoney = ({ listTransactions }) => {
  const total = () => {
    return listTransactions.reduce((total, atual) => total + atual.value, 0);
  };
  return (
    <div className="container-total">
      <p>Valor total:</p>
      <p>
        <span>$ {total()}</span>
      </p>
    </div>
  );
};
export default TotalMoney;
