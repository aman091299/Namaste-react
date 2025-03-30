import { useRouteError } from "react-router";

const Error=()=>{
    const error=useRouteError();
    console.log(error);
    return(
        <div>
        <h1>{error.data}</h1>
          <h1> {error.status}</h1>
           <h2>{error.statusText}</h2>

        </div>
    )
}

export default Error;