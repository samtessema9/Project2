import React, {useContext} from "react";
import './index.css'
import { primaryContext } from "../context/primaryContext";
import Search from "./Search";
import Editor from '@monaco-editor/react'

const Prompt = () => {

    const { setCode } = useContext(primaryContext)

    const handleChange = (value) => {
        setCode(value)
    }

    return ( 
        <div id="prompt">
            <h3>enter / edit Code</h3>
            <Editor 
                height="80vh"
                width="70%"
                defaultLanguage="javascript"
                theme="vs-dark"
                onChange={handleChange}
                options={{
                    wordWrap: 'on',
                    readOnly: false,
                    fontSize: 17,
                }}
            />
            <Search />
        </div>
     );
}
 
export default Prompt;