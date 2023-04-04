import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 } from 'uuid';
import { add, remove } from '../../store/reducers/todo-slice';

const Todos = () => {

    const [enteredLabel, setEnteredLabel] = useState('')
    const dispatch = useDispatch()

    const { todos } = useSelector(store => {
        // console.log("STORE : ", store);
        return store.todoReducer
    })

    const addClickHandler = () => {
        let todo = {
            id: v4(),
            label: enteredLabel,
            status: false
        }
        console.log(todo);
        dispatch(add(todo))
    }

    return (
        <>
            <h3 className='display-4 text-center'>My Todos</h3>

            <div className='row'>
                <div className='col-6 offset-2'>
                    <input type="text" className='form-control'
                        placeholder='enter todo label' value={enteredLabel}
                        onChange={event => setEnteredLabel(event.target.value)} />
                </div>
                <div className='col-2'>
                    <button className='btn btn-secondary' onClick={addClickHandler}>Add</button>
                </div>
            </div>

            {
                todos.length > 0 && <div className='row'>
                    <div className='col-6 offset-3'>
                        <ul className='list-group'>
                            {todos.map(todo => <li className='list-group-item mb-3' key={todo.id}>{todo.label}</li>)}
                        </ul>
                    </div>
                </div>
            }
        </>
    )

}


export default Todos;
