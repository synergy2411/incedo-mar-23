import ExpenseDate from "../ExpenseDate/ExpenseDate";

const ExpenseItem = (props) => {
    return (
        <div className="col-4">
            <div className="card">
                <div className="card-header">
                    <h6 className="text-center">{props.expense.title.toUpperCase()}</h6>

                </div>
                <div className="card-body">
                    <p>Amount : ${props.expense.amount}</p>
                    {/* <p>Date : {props.expense.createdAt.toString()}</p> */}
                    <ExpenseDate createdAt={props.expense.createdAt} />
                </div>
            </div>
        </div>
    )
}

export default ExpenseItem;