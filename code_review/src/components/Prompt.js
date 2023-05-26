import React from "react";
import './index.css'
// import {config} from "dotenv";
// config({path: '../.env'})

const Prompt = ({id}) => {
    return ( 
        <div id={id}>
            <p>This is prompt {id}</p>
            <h2>Enter code snippet below.</h2>
            <textarea></textarea>
        </div>
     );
}
 
export default Prompt;