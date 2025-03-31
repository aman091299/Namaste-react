import { Outlet } from "react-router";


const About=()=>{
    return (
        <div>
            This is an about us page
            <Outlet/>
           
        </div>
    )
}

export default About;