import React, {useContext} from "react";
import { primaryContext } from "../context/primaryContext";
import "./index.css"
// import {config} from "dotenv";
// config({path: '../.env'})

const Response = () => {
    const { response} = useContext(primaryContext)

    return ( 
        <div id="response">
            <h3>Response</h3>
            <textarea value={response[response.length - 1]}></textarea>
        </div>
     );
}
 
export default Response;