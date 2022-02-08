const TotalMoney = ({listTransactions}) => {
    const total =()=>{
        return(listTransactions.reduce((total,atual)=>(total+atual.value),0))
    }
    return(
        <div className="total">
            <p>Valor total:</p> 
            <p><span>$</span>{total()}</p> 
        </div>
    )

}
export default TotalMoney