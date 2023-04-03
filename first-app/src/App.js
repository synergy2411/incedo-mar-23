import Expenses from "./Components/Expenses/Expenses";


function App() {


  return (
    <div className="container">
      <Expenses />
      {/* <button onClick={() => setToggle(!toggle)}>Toggle</button>
      {toggle && <Comment />} */}
    </div>
  );
}

export default App;


// JSX -> JavaScript -> VDOM -> Actual DOM -> UI