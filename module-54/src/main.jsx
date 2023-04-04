import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/Home/Home';
import About from './component/About/About';
import Contact from './component/Contact/Contact';
import First from './component/First/First';
import Friends from './component/Friends/Friends';
import FriendDetails from './component/FriendDetails/FriendDetails';
import Posts from './component/Posts/Posts';
import PostDetail from './component/PostDetail/PostDetail';

// const router= createBrowserRouter([
//   {
//     path:'/',
//     element:<App></App>
//   },
//   {
//     path:'/about',
//     element:<h2>This is about section</h2>
//   },
//   {
//     path:"/contact",
//     element:<h2>Contact us </h2>
//   }
// ])

const router= createBrowserRouter([
  {
    path:'/',
    element:<Home></Home>,
    children:[
      {
        path:'/',
        element:<First></First>

      },
      {
        path:'/friends',
        element:<Friends></Friends>,
        loader :()=> fetch('https://jsonplaceholder.typicode.com/users')

      },
      {
        path:'/friend/:FriendId',
        element:<FriendDetails></FriendDetails>,
        loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.FriendId}`)
      },
      {
        path:'/post/:postId',
        element:<PostDetail></PostDetail>,
        loader:({params})=> fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)

      },
      {
        path:'/posts',
        element:<Posts></Posts>,
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/posts')

      },
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'contact',
        element:<Contact></Contact>
      },{
        path:'*',
        element:<div>4444444444000000004444444</div>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
