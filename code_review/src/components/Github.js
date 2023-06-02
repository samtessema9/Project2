import React, {useState} from 'react';
import axios from 'axios';

const Github = () => {

    const [link, setLink] = useState('')

    const fetchFilesRecursively = async (username, repository, folderPath) => {
        const apiUrl = `https://api.github.com/repos/${username}/${repository}/contents/${folderPath}`;
      
        try {
          const response = await axios.get(apiUrl);
          const data = response.data;
      
          // Loop through the items in the folder
          for (const item of data) {
            if (item.type === 'file') {
              const fileContentsResponse = await axios.get(item.download_url);
              const fileContents = atob(fileContentsResponse.content);
      
              console.log(`File: ${item.path}`);
              console.log('Contents:', fileContents);
            } else if (item.type === 'dir') {
                await fetchFilesRecursively(username, repository, item.path);
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
        const path = parts[parts.length-1]
        
        if (username && repo && path) {
            return {username, repo, path}
        } else {
            return false
        }
    }

      const handleClick = () => {
        const info = extractInfoFromUrl(link)
        if (!info) {
            console.log('invalid link')
            return 
        }
        console.log(info)
        
      }

      const handleChange = (e) => {
        setLink(e.target.value)
      }

    return ( 
        <>
            <input value={link} onChange={handleChange} />
            <button onClick={handleClick}>submit</button>
        </>
     );
}
 
export default Github;



  
 