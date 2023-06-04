import { useState, createContext } from 'react';

export let primaryContext = createContext();

const PrimaryContextProvider = (props) => {
    const [activeTab, setActiveTab] = useState('prompt');

    const [prompt, setPrompt] = useState(true)

    const [code, setCode] = useState([]);

    const [response, setResponse] = useState(['']);

    const [convo, setConvo] = useState([{"role": "system", "content": "you are a code reviewer"}]);

    const obj = {
        code, setCode,
        response, setResponse, 
        convo, setConvo, 
        prompt, setPrompt,
        activeTab, setActiveTab
    }

    return ( 
        <primaryContext.Provider value={obj}>
            {props.children}
        </primaryContext.Provider>
     );
}
 
export default PrimaryContextProvider;