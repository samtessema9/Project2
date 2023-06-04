import React, {useContext, useState} from "react";
import './index.css'
import { primaryContext } from "../context/primaryContext";
import Search from "./Search";
import Editor from '@monaco-editor/react'

const Prompt = () => {

    const { code, setCode } = useContext(primaryContext)

    const [language, setLanguage] = useState('javascript');

    let languages = ['C', 'CSS', 'C++', 'Go', 'HTML', 'Java', 'Javascript', 'Kotlin', 'Python', 'PHP', 'Ruby', 'Rust','Swift']

    const handleLanguageChange = (e) => {
        setLanguage(e.target.value);
    };

    const handleCodeChange = (value) => {
        setCode(value)
    }

    return ( 
        <div id="prompt">
            <h3>enter / edit Code</h3>
            <select value={language} onChange={handleLanguageChange}>
                {languages.map(language => {
                    return <option value={language.toLowerCase()} key={language}>{language}</option>
                })}
            </select>
            <Editor 
                value={code}
                language={language}
                height="80vh"
                width="70%"
                theme="vs-dark"
                onChange={handleCodeChange}
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