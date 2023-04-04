import React from 'react';
import { useSelector } from 'react-redux';

const Todos = () => {

    const { todos } = useSelector(store => store.todoReducer)

    return (
        <>
            <h3 className='display-4 text-center'>My Todos</h3>
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
