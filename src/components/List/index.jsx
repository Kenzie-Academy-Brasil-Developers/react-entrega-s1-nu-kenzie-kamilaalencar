import Card from "../Card/index";

const List = ({ listTransactions }) => {
  return (
    <div className="container-list">
      {listTransactions.map((transaction, index) => (
        <Card transaction={transaction} key={index} />
      ))}
    </div>
  );
};

export default List;
