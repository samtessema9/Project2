import { useState, createContext } from 'react';

export let primaryContext = createContext();

const PrimaryContextProvider = (props) => {
    const [prompt, setPrompt] = useState(true)

    const [code, setCode] = useState([]);

    const [response, setResponse] = useState([]);

    const [request, setRequest] = useState(['']);

    const obj = {
        code, setCode,
        response, setResponse, 
        request, setRequest, 
        prompt, setPrompt
    }

    return ( 
        <primaryContext.Provider value={obj}>
            {props.children}
        </primaryContext.Provider>
     );
}
 
export default PrimaryContextProvider;