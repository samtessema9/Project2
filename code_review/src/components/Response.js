import React from "react";
import "./index.css"
// import {config} from "dotenv";
// config({path: '../.env'})

const Response = ({id, value}) => {
    return ( 
        <div id={id}>
            <p>This is the Response {id}</p>
            <textarea value={value}></textarea>
        </div>
     );
}
 
export default Response;