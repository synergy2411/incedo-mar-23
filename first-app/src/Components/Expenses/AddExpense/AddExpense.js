import { useRef, useState } from "react";
import { v4 } from 'uuid';

const AddExpense = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');

    const createdAtRefInput = useRef()

    const titleChangeHandler = event => setEnteredTitle(event.target.value)

    const submitHandler = event => {
        event.preventDefault();
        console.log(enteredTitle, enteredAmount, createdAtRefInput.current.value);
        let newExpense = {
            id: v4(),
            title: enteredTitle,
            amount: Number(enteredAmount),
            createdAt: new Date(createdAtRefInput.current.value)
        }
        props.onAddNewExpense(newExpense)
    }

    return (
        <div className="row">
            <div className="col-6 offset-3">
                <div className="card">
                    <div className="card-body">
                        <h4 className="text-center">Add Expenses</h4>
                        <form onSubmit={submitHandler}>
                            {/* title */}
                            <div className="form-group mb-3">
                                <label>Title:</label>
                                <input type="text" className="form-control"
                                    value={enteredTitle}
                                    onChange={titleChangeHandler} />
                            </div>
                            {/* amount */}
                            <div className="form-group mb-3">
                                <label>Amount:</label>
                                <input type="number" min="0.1" step="0.1" className="form-control"
                                    value={enteredAmount}
                                    onChange={event => setEnteredAmount(event.target.value)} />
                            </div>
                            {/* createdAt */}
                            <div className="form-group mb-3">
                                <label>Date:</label>
                                <input type="date" className="form-control"
                                    min="2022-04-01" max="2023-03-31"
                                    ref={createdAtRefInput} />
                            </div>
                            {/* button */}
                            <div className="form-group">
                                <div className="d-grid">
                                    <button className="btn btn-success" type="submit">Add</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddExpense;