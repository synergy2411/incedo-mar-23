import React, { useEffect, useState } from 'react';

const UseEffectDemo = () => {

    const [toggle, setToggle] = useState(true);
    const [show, setShow] = useState(true);
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(response => response.json())
            .then(result => setTodos(result))
            .catch(console.error)
    }, [])

    // useEffect(() => {
    //     console.log("Use Effect Callback")
    // })

    // useEffect(() => {
    //     console.log("Use Effect Callback")
    // }, [])

    // useEffect(() => {
    //     console.log("Use Effect Callback")
    // }, [toggle])

    // useEffect(() => {
    //     console.log("Use Effect Callback")
    //     return () => {
    //         console.log("Clean-up")
    //     }
    // }, [toggle])

    // console.log("Outside effect")

    return (
        <div>
            <h4>Use effect demo component</h4>
            <button onClick={() => setShow(!show)} className='btn btn-warning'>Show</button>
            <button onClick={() => setToggle(!toggle)} className='btn btn-info'>Toggle</button>
            {toggle && <p>This paragraph is toggle.</p>}
            {show && <p>This paragraph is show/hide.</p>}

            <ul>
                {todos.map(todo => <li key={todo.id}>{todo.title}</li>)}
            </ul>
        </div>
    );
}

export default UseEffectDemo;