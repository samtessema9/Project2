import React, {useState, useContext, useEffect} from 'react';
import { primaryContext } from '../context/primaryContext'
import axios from 'axios';

const Github = () => {
    
    const [firstRender, setFirstRender] = useState(true)

    const [request, setRequest] = useState(false)

    const [link, setLink] = useState('')

    const {convo, setConvo, response, setResponse} = useContext(primaryContext)

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

    useEffect(() => {
        if (firstRender) {
            setFirstRender(false)
        } else {
           
            fetchData();
        }
    }, [request])

    const fetchFilesRecursively = async (username, repository, folderPath, store) => {
        const apiUrl = `https://api.github.com/repos/${username}/${repository}/contents/${folderPath}`;
        let code = ''
      
        try {
          const response = await axios(apiUrl);
          const data = response.data;
      
          // Loop through the items in the folder
          for (const item of data) {
            if (item.type === 'file' && !item.name.endsWith('.png') && !item.name.endsWith('.ico') && !item.name.endsWith('.svg')) {
              const fileContentsResponse = await axios(item._links.self);
              const fileContents = atob(fileContentsResponse.data.content);
      
              store.push(`File: ${item.path}\n\n`)
              store.push(`Contents: \n${fileContents}\n\n`)

            } else if (item.type === 'dir') {
                await fetchFilesRecursively(username, repository, item.path, store);
             
            }
          }

          
    
        } catch (error) {
          console.error('Error reading folder:', error);
          throw error;
        }
      };

      const extractInfoFromUrl = (url) => {
        const baseUrl = 'https://github.com/'
        const parts = url.replace(baseUrl, '').split('/')
        
        const username = parts[0]
        const repo = parts[1]
        const path = parts[parts.length-1] || '/'
        
        if (username && repo && path) {
            return {username, repo, path}
        } else {
            return false
        }
      }

      const handleClick = async () => {
        const info = extractInfoFromUrl(link)
        if (!info) {
            console.log('invalid link')
            return 
        }

        const {username, repo, path} = info
        let codeArr = [];
        await fetchFilesRecursively(username, repo, path, codeArr)

        let strCode = codeArr.reduce((total, element) => total + element)

        setConvo([...convo , {"role": "user", "content": `This is code from a github repo. each files is labeled file: *path* and content: *code*. review all of the code below and tell me if there are any issues or changes that should be made and which file the issues are in. if no changes then tell me what the code does well. \n\n ${strCode}`}])

        // console.log("setting request, code is ", strCode)
        setRequest(true)

      }

      const handleChange = (e) => {
        setLink(e.target.value)
      }

    return ( 
        <div id="github">
            <input 
              value={link} 
              onChange={handleChange} 
              placeholder='github-link'
            />
            <button onClick={handleClick}>submit</button>
        </div>
     );
}
 
export default Github;



  
 