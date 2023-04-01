import { useState } from 'react';

import Expenses from "./Components/Expenses/Expenses";
import AddExpense from './Components/Expenses/AddExpense/AddExpense';


function App() {

  const [show, setShow] = useState(false)

  const clickHandler = () => setShow(!show)

  return (
    <div className="container">
      <div className='row'>
        <div className='col-4 offset-4'>
          <div className='d-grid'>
            <button className="btn btn-secondary" onClick={clickHandler}>
              {show ? "Hide" : "Show"} Form
            </button>
          </div>
        </div>
      </div>
      {show && <AddExpense />}
      <Expenses />
    </div>
  );
}

export default App;


// JSX -> JavaScript -> VDOM -> Actual DOM -> UI