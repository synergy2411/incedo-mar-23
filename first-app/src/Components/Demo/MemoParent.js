import React, { useState, useCallback, useMemo } from 'react';
import MemoChild from './MemoChild';

const MemoParent = () => {

    const [toggle, setToggle] = useState(true)

    console.log("PARENT")

    const demoFunction = useCallback(() => console.log("The Demo Function"), [])

    const numbers = useMemo(() => [12, 23, 4, 45], []);

    return (
        <div>
            <h3>The Parent Component</h3>
            <button onClick={() => setToggle(!toggle)} className='btn btn-dark'>Toggle</button>
            <hr />
            <MemoChild toggle={true} demoFunction={demoFunction} numbers={numbers} />
        </div>
    );
}

export default MemoParent;


// useMemo(() => () => {}) === useCallback(() => {})