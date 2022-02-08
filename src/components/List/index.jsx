import { useState } from "react"
import Card from "../Card/index"

const List = ({listTransactions}) => {
    return(
        <div className="container-list">
            <header>
                <h2>Resumo Financeiro</h2>
                <div>
                    <button>Todos</button>
                    <button>Entradas</button>
                    <button>Saidas</button>
                </div>
            </header>
            {listTransactions.map((transaction, index)=>(
                <Card transaction={transaction} key={index}/>
            ))}
        </div>
    )

    
}

export default List