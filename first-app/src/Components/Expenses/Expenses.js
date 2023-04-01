import ExpenseItem from "./ExpenseItem/ExpenseItem";

const Expenses = () => {

    let expenses = [{
        id: "e001",
        title: "shopping",
        amount: 12.99,
        createdAt: new Date("Dec 21, 2022")
    }, {
        id: "e002",
        title: "planting",
        amount: 10.9,
        createdAt: new Date("Jan 1, 2023")
    }, {
        id: "e003",
        title: "grocery",
        amount: 29.9,
        createdAt: new Date("Mar 20, 2023")
    }]

    return (
        <div>
            <h1 className="text-center">My Expenses App</h1>
            <div className="row">
                <ExpenseItem expense={expenses[0]} />
                <ExpenseItem expense={expenses[1]} />
                <ExpenseItem expense={expenses[2]} />
            </div>
        </div>
    )
}

export default Expenses;