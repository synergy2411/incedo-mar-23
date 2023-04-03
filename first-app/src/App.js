import JsxDemo from './Components/Demo/JsxDemo';
import MemoParent from './Components/Demo/MemoParent';

function App() {


  return (
    <div className="container">
      {/* <UseEffectDemo /> */}
      {/* <Expenses /> */}
      {/* <button onClick={() => setToggle(!toggle)}>Toggle</button>
      {toggle && <Comment />} */}
      {/* <JsxDemo /> */}
      <MemoParent />
    </div>
  );
}

export default App;


// JSX -> JavaScript -> VDOM -> Actual DOM -> UI