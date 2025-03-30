import ReactDOM from "react-dom/client";
import Body from './components/Body'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About'
import Contact from './components/Contact'
import RestaurantMenu from './components/RestaurantMenu'
import {createBrowserRouter, Outlet, RouterProvider} from 'react-router'
import Error from "./components/Error.js"

const AppLayout=()=>{
  return <>
     <Header/>
     <Outlet/>
     <Footer/>
  </>
}

const router=createBrowserRouter([
  {
    path:'/',
    element:<AppLayout/>,
    errorElement: <Error/>,
    
    children:[
      {
          path:'/',
          element:<Body/>,
        
      },
      {
        path:'/about',
        element:<About/>,
  

      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:'restaurant/:restaurantId',
        element:<RestaurantMenu/>
      },
    ]
  },
  
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router}/>);
