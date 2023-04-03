import { useState } from "react";
import ExpenseItem from "./ExpenseItem/ExpenseItem";
import ExpenseFilter from "./ExpenseFilter/ExpenseFilter";
import AddExpense from "./AddExpense/AddExpense";

const INTIAL_EXPENSES = [{
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

const Expenses = () => {


    const [expenses, setExpenses] = useState(INTIAL_EXPENSES)
    const [show, setShow] = useState(false)
    const [selectedYear, setSelectedYear] = useState('2023')

    const clickHandler = () => setShow(!show)

    const onYearSelect = (selYear) => {
        setSelectedYear(selYear)
    }

    const onAddNewExpense = (newExpense) => {
        // Use function in SetState method when next state is depend upon previous state
        setExpenses((prevState) => [newExpense, ...prevState])
    }

    const filteredExpenses = expenses.filter(exp =>
        exp.createdAt.getFullYear().toString() === selectedYear)

    return (
        <div>
            <h1 className="text-center">My Expenses App</h1>

            <div className='row mb-3'>
                <div className='col-4 offset-4'>
                    <div className='d-grid'>
                        <button className="btn btn-secondary" onClick={clickHandler}>
                            {show ? "Hide" : "Show"} Form
                        </button>
                    </div>
                </div>
                <div className='col-4'>
                    <ExpenseFilter onYearSelect={onYearSelect}
                        selectedYear={selectedYear} />
                </div>
            </div>

            {show && <AddExpense onAddNewExpense={onAddNewExpense} />}

            <div className="row">
                {filteredExpenses.map(exp => <ExpenseItem key={exp.id} expense={exp} />)}
            </div>
        </div>
    )
}

export default Expenses;