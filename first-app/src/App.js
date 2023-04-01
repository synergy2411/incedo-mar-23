import Expenses from "./Components/Expenses/Expenses";


function App() {
  return (
    <div className="container">
      <h1>My First App</h1>
      <Expenses />
    </div>
  );
}

export default App;


// JSX -> JavaScript -> VDOM -> Actual DOM -> UI