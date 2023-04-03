import UseEffectDemo from "./Components/Demo/UseEffectDemo";
import Expenses from "./Components/Expenses/Expenses";
import JsxDemo from './Components/Demo/JsxDemo';

function App() {


  return (
    <div className="container">
      {/* <UseEffectDemo /> */}
      {/* <Expenses /> */}
      {/* <button onClick={() => setToggle(!toggle)}>Toggle</button>
      {toggle && <Comment />} */}
      <JsxDemo />
    </div>
  );
}

export default App;


// JSX -> JavaScript -> VDOM -> Actual DOM -> UI