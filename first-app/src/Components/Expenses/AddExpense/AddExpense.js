import { useRef, useState } from "react";
import { v4 } from 'uuid';

const AddExpense = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredCreatedAt, setEnteredCreatedAt] = useState('')

    // const createdAtRefInput = useRef()

    const [titleIsValid, setTitleIsValid] = useState(false);
    const [titleIsTouched, setTitleIsTouched] = useState(false);

    const titleChangeHandler = event => {
        setEnteredTitle(event.target.value)
    }

    const submitHandler = event => {
        event.preventDefault();
        // console.log(enteredTitle, enteredAmount, createdAtRefInput.current.value);
        let newExpense = {
            id: v4(),
            title: enteredTitle,
            amount: Number(enteredAmount),
            // createdAt: new Date(createdAtRefInput.current.value)
            createdAt: new Date(enteredCreatedAt)
        }
        props.onAddNewExpense(newExpense)
    }

    const titleBlurHandler = () => {
        if (enteredTitle.trim().length <= 3) {
            return setTitleIsValid(false)
        }
        setTitleIsTouched(true)
        setTitleIsValid(true)
    }


    const titleIsNotValid = titleIsTouched && !titleIsValid;

    console.log(titleIsNotValid, titleIsTouched, titleIsValid);

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
                                    onChange={titleChangeHandler}
                                    onBlur={titleBlurHandler} />

                                {titleIsNotValid && <p>Title is mandatory filed</p>}
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
                                {/* <input type="date" className="form-control"
                                    min="2022-04-01" max="2023-03-31"
                                    ref={createdAtRefInput} /> */}
                                <input type="date" className="form-control"
                                    min="2022-04-01" max="2023-03-31"
                                    value={enteredCreatedAt} onChange={event => setEnteredCreatedAt(event.target.value)} />
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