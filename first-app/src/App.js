import { Routes, Route, Navigate } from 'react-router-dom';
import Auth from './Components/Auth/Auth';
import Expenses from './Components/Expenses/Expenses'
import Todos from './Components/Todos/Todos'
import Header from './Components/Header/Header';
import Posts from './Components/Posts/Posts';
import PostItem from './Components/Posts/PostItem/PostItem';

function App() {
  return (
    <div className="container">
      <Header />

      <p className='text-center display-4'>My First App</p>

      <Routes>
        <Route path='/' element={<Navigate to="/auth" />} />
        <Route path={"/auth"} element={<Auth />} />
        <Route path={"/todos"} element={<Todos />} />
        <Route path={"/expenses"} element={<Expenses />} />
        <Route path={"/posts/*"} element={<Posts />}>
          <Route path=':postId' element={<PostItem />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>

    </div>
  );
}

export default App;

function PageNotFound() {
  return (
    <h3>Page Not Found</h3>
  )

}


// http://localohost:3000/posts   --> <Posts/>
// http://localohost:3000/posts/p001   --> <PostItem/>