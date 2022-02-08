// import { useState } from "react"
import { FaTrash } from "react-icons/fa";

const Card = ({ transaction }) => {
  return (
    <div className="container-card">
      <h3>{transaction.description}</h3>
      <p>{transaction.type}</p>
      <p>
        <span>R$</span>
        {transaction.value < 0 ? transaction.value * -1 : transaction.value}
      </p>
      <button>
        <FaTrash />
      </button>
    </div>
  );
};

export default Card;
