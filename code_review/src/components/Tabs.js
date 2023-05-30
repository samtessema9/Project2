import React, {useContext, useState} from 'react'
import { primaryContext } from '../context/primaryContext';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Prompt from './Prompt';
import Response from './Response';

function UncontrolledExample() {
    const {response} = useContext(primaryContext)
    const [activeTab, setActiveTab] = useState('prompt');

    const handleTabSelect = (tab) => {
      setActiveTab(tab);
    };
  
    return (
      <Tabs activeKey={activeTab} onSelect={handleTabSelect} id="my-tabs" variant="pills" justify>
        <Tab eventKey="prompt" title="Prompt">
          {activeTab === 'prompt' && <Prompt />}
        </Tab>
        <Tab eventKey="response" title="Response">
          {activeTab === 'response' && <Response value={response[response.length-1]} />}
        </Tab>
        <Tab eventKey="questions" title="Questions">
          {activeTab === 'questions' && <p>content 3</p>}
        </Tab>
      </Tabs>
    );
  };
export default UncontrolledExample;
    