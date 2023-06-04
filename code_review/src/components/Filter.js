import React, {useContext, useEffect, useState} from 'react'
import { primaryContext } from '../context/primaryContext'
import './index.css'
import axios from 'axios';

const Filter = ({text, name}) => {
   
    const [firstRender, setFirstRender] = useState(true)

    const [request, setRequest] = useState(false)

    const {setActiveTab} = useContext(primaryContext);

    const {code, convo, setConvo, response, setResponse} = useContext(primaryContext)

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
          throw new Error(error)
        }
    };


    useEffect(() => {
        if (firstRender) {
            setFirstRender(false);
        } else {
            fetchData();
            console.log({convo})
        }
    }, [request])

    const handleClick = (e) => {
        const queries = {
          syntax: "syntax errors or improvents that should be made",
          errors: "logical errors or error handling issues",
          structure: "structural issues",
          general: "general improvements that could be made"
        }

        setConvo([...convo , {"role": "user", "content": `can you please review this code snippet?\n\ncode snippet: \n${code}\n\nCan you tell me if there are any ${queries[e.target.name]} with the code?\n`}])
        
        setRequest(true)
    }

    return ( 
        <button name={name} onClick={handleClick}>{text}</button>
     );
}
 
export default Filter;