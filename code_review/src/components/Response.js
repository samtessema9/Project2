import React, {useContext} from "react";
import { primaryContext } from "../context/primaryContext";
import Questions from "./Questions";
import "./index.css"

const Response = () => {
    const { response} = useContext(primaryContext)

    return ( 
        <div id="response">
            <h3>Response</h3>
            <div>
                <textarea value={response[response.length - 1]}></textarea>
                <Questions />
            </div>
        </div>
     );
}
 
export default Response;