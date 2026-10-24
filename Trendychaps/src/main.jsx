import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Home'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Cart from './Cart'
import Layout from './Layout'
import Contact from './Contact'
import About from './About'
import Register from './Register'
import Login from './Login'

const router = createBrowserRouter([

    {
    path:'/',
    element:<Register/>
  },

   {
    path:'/Register',
    element:<Register/>
  },

  {
    path:'/Login',
    element:<Login/>
  },
  
  { path:"/app",
    element:<Layout/>,
       
    children:[
  {
    index:true,
    element:<Home/>
  },
 
   {
    path:'Cart',
    element:<Cart/>
  },
  {
    path:'Contact',
    element:<Contact/>
  },

]

}

])

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <Home/>
  // </StrictMode>,
  
   <RouterProvider router={router}/>
)
