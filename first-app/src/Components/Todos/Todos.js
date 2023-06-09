import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 } from 'uuid';
import { add, remove, fetchTodos } from '../../store/reducers/todo-slice';

const Todos = () => {

    const [enteredLabel, setEnteredLabel] = useState('')
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchTodos());
    }, [dispatch])

    const { todos, loading, error } = useSelector(store => store.todoReducer)

    const addClickHandler = () => {
        let todo = {
            id: v4(),
            label: enteredLabel,
            status: false
        }
        dispatch(add(todo))
    }

    const deleteHandler = (todoId) => dispatch(remove(todoId))

    if (loading) {
        return <p className='display-3'>Still Loading...</p>
    }

    if (error) {
        return error;
    }

    return (
        <>
            <h3 className='display-4 text-center'>My Todos</h3>
            <div className='row mb-4'>
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
                            {todos.map(todo =>
                                <li className='list-group-item mb-3' key={todo.id}>
                                    <div className='d-flex justify-content-between'>
                                        <p>{todo.label.toUpperCase()}</p>
                                        <button onClick={() => deleteHandler(todo.id)} className='btn btn-danger btn-sm'>❌</button>
                                    </div>
                                </li>)}
                        </ul>
                    </div>
                </div>
            }
        </>
    )

}


export default Todos;
