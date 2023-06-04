import { useState, createContext } from 'react';

export let primaryContext = createContext();

const PrimaryContextProvider = (props) => {
    const [activeTab, setActiveTab] = useState('prompt');

    const [code, setCode] = useState('');

    const [response, setResponse] = useState(['Loading...']);

    const [convo, setConvo] = useState([{"role": "system", "content": "you are a code reviewer"}]);

    const obj = {
        code, setCode,
        response, setResponse, 
        convo, setConvo, 
        activeTab, setActiveTab
    }

    return ( 
        <primaryContext.Provider value={obj}>
            {props.children}
        </primaryContext.Provider>
     );
}
 
export default PrimaryContextProvider;