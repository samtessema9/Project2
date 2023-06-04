import React, {useContext, useEffect, useState} from 'react';
import { primaryContext } from '../context/primaryContext';
import "./index.css"

const Questions = () => {
    const [firstRender, setFirstRender] = useState(true)
    
    const [requestFromQuestion, setRequestFromQuestion] = useState(false)

    const [question, setQuestion] = useState('')

    const {convo, setConvo, fetchData} = useContext(primaryContext);

    useEffect(() => {
        if (firstRender) {
            setFirstRender(false);
        } else {
            fetchData();
            console.log({convo})
        }
    }, [requestFromQuestion])

    const handleClick = (e) => {

        setConvo([...convo , {"role": "user", "content": question}])
        
        setRequestFromQuestion(true)
    }

    return ( 
        <div id="questions">
            <textarea value={question} onChange={(e) => {
                setQuestion(e.target.value)
            }}></textarea>
            <button onClick={handleClick}>Ask</button>
        </div>
     );
}
 
export default Questions;