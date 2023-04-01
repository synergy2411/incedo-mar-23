import Comment from "./Components/Demo/Comment";
import JsxDemo from "./Components/Demo/JsxDemo";

function App() {
  return (
    <div>
      <h1>My First App</h1>
      <Comment />
      <JsxDemo />
    </div>
  );
}

export default App;


// JSX -> JavaScript -> VDOM -> Actual DOM -> UI