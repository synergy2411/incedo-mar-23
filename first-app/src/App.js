import { Routes, Route } from 'react-router-dom';
import Auth from './Components/Auth/Auth';
import Expenses from './Components/Expenses/Expenses'
import Todos from './Components/Todos/Todos'
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="container">
      <Header />

      <p className='text-center display-4'>My First App</p>

      <Routes>
        <Route path={"/auth"} element={<Auth />} />
        <Route path={"/todos"} element={<Todos />} />
        <Route path={"/expenses"} element={<Expenses />} />
      </Routes>

    </div>
  );
}

export default App;

