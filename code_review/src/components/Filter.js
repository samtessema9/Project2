import React, {useContext} from 'react'
import { primaryContext } from '../context/primaryContext'
import './index.css'
import { Configuration, OpenAIApi } from 'openai';
import axios from 'axios';

const Filter = ({text, name}) => {
    const openai = new OpenAIApi(new Configuration({
        apiKey: process.env.REACT_APP_API_KEY
    }))

    const {code, request, setRequest, response, setResponse, prompt, setPrompt} = useContext(primaryContext)

    const makeRequest = async () => {
        const req = `can you please review this code snippet?\n\ncode snippet: \n${code}\n\nCan you tell me if there are  any ${request[request.length-1]} issues with the code?\n`

        const resp = await axios({
            url: "https://api.openai.com/v1/chat/completions",
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + process.env.REACT_APP_API_KEY,
            },
            data: JSON.stringify({
                "model": "gpt-3.5-turbo",
                "messages": [{"role": "user", "content": req}]
            })
        })
        
        console.log(resp.data.choices[0].message.content)

    }

    const handleClick = (e) => {
        setRequest([...request, e.target.name])
        makeRequest()
        setPrompt(!prompt)
    }

    return ( 
        <button name={name} onClick={handleClick}>{text}</button>
     );
}
 
export default Filter;