import { useContext } from "react";
import { Outlet } from "react-router";
import UserContext from "../utils/UserContext";


const About=()=>{
    console.log("inside about")
    const user=useContext(UserContext);
    console.log("user inside about us page",user)
    return (
        
        <div>
            This is an about us page
            <Outlet/>
           
        </div>
    )
}

export default About;