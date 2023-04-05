import { Routes, Route, Navigate } from 'react-router-dom';
// import Auth from './Components/Auth/Auth';
// import Expenses from './Components/Expenses/Expenses'
// import Todos from './Components/Todos/Todos'
import Header from './Components/Header/Header';
// import Posts from './Components/Posts/Posts';
// import PostItem from './Components/Posts/PostItem/PostItem';
import React, { Suspense } from 'react';
import AddPost from './Components/Posts/AddPost/AddPost';

const Auth = React.lazy(() => import("./Components/Auth/Auth"))
const Expenses = React.lazy(() => import('./Components/Expenses/Expenses'))
const Todos = React.lazy(() => import('./Components/Todos/Todos'))
const Posts = React.lazy(() => import('./Components/Posts/Posts'))
const PostItem = React.lazy(() => import('./Components/Posts/PostItem/PostItem'))

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <div className="container">
        <Header />

        <Routes>
          <Route path='/' element={<Navigate to="/auth" />} />
          <Route path={"/auth"} element={<Auth />} />
          <Route path={"/todos"} element={<Todos />} />
          <Route path={"/expenses"} element={<Expenses />} />
          <Route path={"/posts/*"} element={<Posts />}>
            <Route path=':postId' element={<PostItem />} />
            <Route path='add-post' element={<AddPost />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>

      </div>
    </Suspense>
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