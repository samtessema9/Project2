import React, {useContext} from "react";
import './index.css'
import { primaryContext } from "../context/primaryContext";

const Prompt = () => {

    const {code, setCode} = useContext(primaryContext)

    const handleChange = (e) => {
        setCode(e.target.value)
    }

    return ( 
        <div id="prompt">
            <h3>enter / edit Code</h3>
            <textarea value={code} onChange={handleChange}></textarea>
        </div>
     );
}
 
export default Prompt;