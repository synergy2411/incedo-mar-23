import Comment from './Components/Demo/Comment';
import Expenses from "./Components/Expenses/Expenses";


function App() {


  return (
    <div className="container">
      {/* <Expenses /> */}
      <Comment />
    </div>
  );
}

export default App;


// JSX -> JavaScript -> VDOM -> Actual DOM -> UI