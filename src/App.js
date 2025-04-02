import ReactDOM from "react-dom/client";
import Body from './components/Body'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About'
import Contact from './components/Contact'
import RestaurantMenu from './components/RestaurantMenu'
import {createBrowserRouter, Outlet, RouterProvider} from 'react-router'
import Error from "./components/Error.js"
import ProfileClassComponent from "./components/ProfileClassComponent.js";
import { lazy, Suspense,useState } from "react";
import Shimmer from "./components/Shimmer.js";
import Section from './components/Section.js'
// import Instamart from "./components/Instamart.js";
import Accordian from "./components/Accourdian.js";
import UserContext from "./utils/UserContext.js";

const Instamart=lazy(()=>import ("./components/Instamart.js"))
const AppLayout=()=>{
  
 console.log("iniside app layout hmm")
  const [user,setUser]=useState({
    name:"rishabh",
    email:"rishabh@gmail.com"
  });


  return <div >
  <UserContext.Provider value={{
    user:user,
    setUser
    }}>
    <Header/>
     <Outlet />
     <Footer/>
     
  </UserContext.Provider>
     
  </div>
}

const router=createBrowserRouter([
  {
    path:'/',
    element:<AppLayout/>,
    errorElement: <Error/>,
    
    children:[
      {
        path:'/section',
        element:<Accordian/>
         ,

    },
      {
          path:'/',
          element:<Body/>,

      },
      {
           path:'instamart',

           element:
            <Suspense fallback={<Shimmer/>}>
               <Instamart/>
            </Suspense>
          
      },
      {
        path:'/about',
        element:<About/>,
        children:[{
          path:"xyz",
         element:<Contact/>
        }]
      },

      {
        path:'restaurant/:restaurantId',
        element:<RestaurantMenu/>
      },
      {
        path:'/contact',
        element:<Contact/>
      }
    ]
  },
  
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router}/>);
        