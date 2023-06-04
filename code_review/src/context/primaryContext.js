import { useState, createContext } from 'react';
import axios from 'axios';

export let primaryContext = createContext();

const PrimaryContextProvider = (props) => {
    const [activeTab, setActiveTab] = useState('prompt');

    const [code, setCode] = useState('');

    const [response, setResponse] = useState(['Loading...']);

    const [convo, setConvo] = useState([{"role": "system", "content": "you are a code reviewer"}]);

    const fetchData = async () => {
        try {
          setActiveTab('response')

          const resp = await axios({
            url: "https://api.openai.com/v1/chat/completions",
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Authorization": "Bearer " + process.env.REACT_APP_API_KEY,
            },
            data: JSON.stringify({
              "model": "gpt-3.5-turbo",
              "messages": convo,
            }),
          });

          const data = resp.data.choices

          setConvo([...convo, data[data.length-1].message])
          
          setResponse([...response, data[data.length-1].message.content]);
     
        } 
        
        catch (error) {
          // Handle error
          throw new Error(error);
        }
    };

    const obj = {
        code, setCode,
        response, setResponse, 
        convo, setConvo, 
        activeTab, setActiveTab,
        fetchData
    }

    return ( 
        <primaryContext.Provider value={obj}>
            {props.children}
        </primaryContext.Provider>
     );
}
 
export default PrimaryContextProvider;