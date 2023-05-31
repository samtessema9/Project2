import React, {useContext, useEffect, useState} from 'react'
import { primaryContext } from '../context/primaryContext'
import './index.css'
import { Configuration, OpenAIApi } from 'openai';
import axios from 'axios';

const Filter = ({text, name}) => {
    // const openai = new OpenAIApi(new Configuration({
    //     apiKey: process.env.REACT_APP_API_KEY
    // }))
    const [firstRender, setFirstRender] = useState(true)

    const {code, convo, setConvo, response, setResponse, prompt, setPrompt} = useContext(primaryContext)

    // useEffect( async () => {
    //     const resp = await axios({
    //         url: "https://api.openai.com/v1/chat/completions",
    //         method: 'POST',
    //         headers: {
    //             "Content-Type": "application/json",
    //             "Authorization": "Bearer " + process.env.REACT_APP_API_KEY,
    //         },
    //         data: JSON.stringify({
    //             "model": "gpt-3.5-turbo",
    //             "messages": convo
    //         })
    //     })
        
    //     setResponse([...response, resp.data.choices[0].message.content])

    // }, [convo])

    // useEffect(() => {
    //     const fetchData = async () => {
    //       try {
    //         const resp = await axios({
    //           url: "https://api.openai.com/v1/chat/completions",
    //           method: "POST",
    //           headers: {
    //             "Content-Type": "application/json",
    //             "Authorization": "Bearer " + process.env.REACT_APP_API_KEY,
    //           },
    //           data: JSON.stringify({
    //             "model": "gpt-3.5-turbo",
    //             "messages": convo,
    //           }),
    //         });

    //         const data = resp.data.choices

    //         setConvo([...convo, data[data.length-1].message])
            
    //         setResponse([...response, data[data.length-1].message.content]);

    //       } 
          
    //       catch (error) {
    //         // Handle error
    //         console.error(error);
    //       }
    //     };
        
    //     // if (firstRender) {
    //     //     setFirstRender(false)
    //     // } else {
    //     //     fetchData();
    //     // }

    //     }, []);
    const fetchData = async () => {
        try {
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
          console.error(error);
        }
    };

    const addToConvo = async (req) => {
        
        setConvo([...convo , {"role": "user", "content": `can you please review this code snippet?\n\ncode snippet: \n${code}\n\nCan you tell me if there are any ${req} issues with the code?\n`}])
    }

    const handleClick = (e) => {
        addToConvo(e.target.name)
        fetchData()
    }

    return ( 
        <button name={name} onClick={handleClick}>{text}</button>
     );
}
 
export default Filter;