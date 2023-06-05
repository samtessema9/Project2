import React, {useContext, useEffect, useState} from 'react'
import { primaryContext } from '../context/primaryContext'
import './index.css'
import axios from 'axios';

const Filter = ({text, name}) => {
   
    const [firstRender, setFirstRender] = useState(true)

    const [requestFromFilter, setRequestFromFilter] = useState(false)

    const {code, convo, setConvo, response, setResponse, setActiveTab, fetchData} = useContext(primaryContext)

    useEffect(() => {
        if (firstRender) {
            setFirstRender(false);
        } else {
            fetchData();
            console.log({convo})
        }
    }, [requestFromFilter])

    const handleClick = (e) => {
        const queries = {
          syntax: "syntax errors or improvents that should be made",
          errors: "logical errors or error handling issues",
          structure: "structural issues",
          general: "general improvements that could be made"
        }

        setConvo([...convo , {"role": "user", "content": `can you please review this code snippet?\n\ncode snippet: \n${code}\n\nCan you tell me if there are any ${queries[e.target.name]} with the code?\n`}])
        
        setRequestFromFilter(!requestFromFilter)
    }

    return ( 
        <button name={name} onClick={handleClick}>{text}</button>
     );
}
 
export default Filter;