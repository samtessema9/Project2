import { useState, createContext } from 'react';

export let primaryContext = createContext();

const PrimaryContextProvider = (props) => {
    const [prompt, setPrompt] = useState(true)

    const [code, setCode] = useState([]);

    const [response, setResponse] = useState(['']);

    const [convo, setConvo] = useState([{"role": "system", "content": "you are a code reviewer"}]);

    const obj = {
        code, setCode,
        response, setResponse, 
        convo, setConvo, 
        prompt, setPrompt
    }

    return ( 
        <primaryContext.Provider value={obj}>
            {props.children}
        </primaryContext.Provider>
     );
}
 
export default PrimaryContextProvider;