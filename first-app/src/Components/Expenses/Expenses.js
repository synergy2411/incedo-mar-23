import { useState } from "react";
import ExpenseItem from "./ExpenseItem/ExpenseItem";
import ExpenseFilter from "./ExpenseFilter/ExpenseFilter";
import AddExpense from "./AddExpense/AddExpense";

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

    const [show, setShow] = useState(false)

    const clickHandler = () => setShow(!show)

    const onYearSelect = (selectedYear) => {
        console.log("Selected : ", selectedYear)
    }

    return (
        <div>
            <h1 className="text-center">My Expenses App</h1>

            <div className='row'>
                <div className='col-4 offset-4'>
                    <div className='d-grid'>
                        <button className="btn btn-secondary" onClick={clickHandler}>
                            {show ? "Hide" : "Show"} Form
                        </button>
                    </div>
                </div>
                <div className='col-4'>
                    <ExpenseFilter onYearSelect={onYearSelect} />
                </div>
            </div>
            {show && <AddExpense />}
            <div className="row">
                <ExpenseItem expense={expenses[0]} />
                <ExpenseItem expense={expenses[1]} />
                <ExpenseItem expense={expenses[2]} />
            </div>
        </div>
    )
}

export default Expenses;