import { useRouteError } from "react-router-dom";

const Error = ()=>{
    const err=useRouteError();
    console.log(err);
    return(
        <div>
        <h2>OPPS</h2>
        <h2>Somthing Went Wrong !!!!!!</h2>
        <h1>{err.status}: {err.statusText}</h1>
        </div>
    )
}

export default Error;