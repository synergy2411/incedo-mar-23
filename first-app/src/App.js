import UseEffectDemo from "./Components/Demo/UseEffectDemo";
import Expenses from "./Components/Expenses/Expenses";


function App() {


  return (
    <div className="container">
      <UseEffectDemo />
      {/* <Expenses /> */}
      {/* <button onClick={() => setToggle(!toggle)}>Toggle</button>
      {toggle && <Comment />} */}
    </div>
  );
}

export default App;


// JSX -> JavaScript -> VDOM -> Actual DOM -> UI