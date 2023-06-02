import React from 'react';
import axios from 'axios';

const Github = () => {
    return ( 
        <p>Github here</p>
     );
}
 
export default Github;


const fetchFilesRecursively = async (username, repository, folderPath) => {
    const apiUrl = `https://api.github.com/repos/${username}/${repository}/contents/${folderPath}`;
  
    try {
      const response = await axios.get(apiUrl);
      const data = response.data;
  
      // Loop through the items in the folder
      for (const item of data) {
        if (item.type === 'file') {
          const fileUrl = item.download_url;
          const fileContentsResponse = await axios.get(fileUrl);
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
  
  // Usage example
  const username = 'your-github-username';
  const repository = 'your-github-repo';
  const folderPath = 'path/to/folder';
  const accessToken = 'your-personal-access-token';
  
  fetchFilesRecursively(username, repository, folderPath, accessToken)
    .catch(error => {
      // Handle errors
    });