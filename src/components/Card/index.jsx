import "./style.css";
import { FaTrash } from "react-icons/fa";

const Card = ({ transaction }) => {
  return (
    <div className="container-card">
      <div className="container-1">
        <h3>{transaction.description}</h3>
        <p>{transaction.type}</p>
      </div>
      <div className="container-2">
        <p>
          <span>
            R${" "}
            {transaction.value < 0 ? transaction.value * -1 : transaction.value}
          </span>
        </p>
        <button>
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default Card;
