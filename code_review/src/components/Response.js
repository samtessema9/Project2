import React from "react";
import "./index.css"
// import {config} from "dotenv";
// config({path: '../.env'})

const Response = ({id}) => {
    return ( 
        <div id={id}>
            <p>This is the Response {id}</p>
        </div>
     );
}
 
export default Response;