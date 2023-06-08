import React, {useState, useContext, useEffect} from 'react';
import { primaryContext } from '../context/primaryContext'
import axios from 'axios';
import './index.css';

const Github = () => {
    
    const [firstRender, setFirstRender] = useState(true)

    const [requestFromGithub, setRequestFromGithub] = useState(false)

    const [link, setLink] = useState('')

    const {convo, setConvo, fetchData} = useContext(primaryContext)

    useEffect(() => {
        if (firstRender) {
            setFirstRender(false)
        } else {
           fetchData();
        }
    }, [requestFromGithub])

    const fetchFilesRecursively = async (username, repository, folderPath, store) => {
        const apiUrl = `https://api.github.com/repos/${username}/${repository}/contents/${folderPath}`;
      
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
        } 
        catch (error) {
          throw new Error(error.message);
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

        // let first = strCode.slice(0, strCode.length / 4)
        // let second = strCode.slice(strCode.length / 4, strCode.length / 2)
        // let third = strCode.slice(strCode.length / 2, (strCode.length / 2) + strCode.length / 4)
        // let fourth = strCode.slice((strCode.length / 2) + strCode.length / 4)

        // let message = [
        //   {"role": "user", "content": `This is code from a github repo, it's split up into four messages. each files is labeled file: *path* and content: *code*. review all of the code below and tell me if there are any issues or changes that should be made and which file the issues are in. if no changes then tell me what the code does well. \n\n ${first}`},
        //   {"role": "user", "content": second},
        //   {"role": "user", "content": third},
        //   {"role": "user", "content": fourth}

        // ]

        setConvo([...convo , {"role": "user", "content": `This is code from a github repo, it's split up into four messages. each files is labeled file: *path* and content: *code*. review all of the code below and tell me if there are any issues or changes that should be made and which file the issues are in. if no changes then tell me what the code does well. \n\n ${strCode}`}])

        setRequestFromGithub(true)

      }

      const handleChange = (e) => {
        setLink(e.target.value)
      }

    return ( 
        <div id="github">
            <p>Enter a github link below. If you are in the root of your project add a / at the end of the link. If you are inside a directory do not add a backslas to the end of the link.</p>
            <br />
            <p>The api can only handle a certain amount of tokens(sentences). If you get an alert please retry with a smaller repo or go inside a sub directory and try again.</p>
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



  
 