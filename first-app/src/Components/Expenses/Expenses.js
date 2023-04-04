import { useEffect, useState } from "react";
import ExpenseItem from "./ExpenseItem/ExpenseItem";
import ExpenseFilter from "./ExpenseFilter/ExpenseFilter";
import AddExpense from "./AddExpense/AddExpense";
import AuthContext from "../../context/auth-context";

const Expenses = () => {

    const [expenses, setExpenses] = useState([])
    const [show, setShow] = useState(false)
    const [selectedYear, setSelectedYear] = useState('2023')

    useEffect(() => {
        fetch("http://localhost:3030/expenses")
            .then(response => response.json())
            .then(result => {
                setExpenses(result.map(exp => {
                    return { ...exp, createdAt: new Date(exp.createdAt) }
                }))

            }).catch(console.error)
    }, [])

    const clickHandler = () => setShow(!show)

    const onYearSelect = (selYear) => {
        setSelectedYear(selYear)
    }

    const onAddNewExpense = (newExpense) => {
        fetch("http://localhost:3030/expenses", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newExpense)
        }).then(response => response.json())
            .then(result => {
                // Use function in SetState method when next state is depend upon previous state
                setExpenses((prevState) => [newExpense, ...prevState])
                setShow(false);
            }).catch(console.error)
    }

    const filteredExpenses = expenses.filter(exp =>
        exp.createdAt.getFullYear().toString() === selectedYear)

    return (
        <AuthContext.Provider value={{ isLoggedIn: false }}>

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
        </AuthContext.Provider>
    )
}

export default Expenses;