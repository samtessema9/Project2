import React, {useState} from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Prompt from './Prompt';
import Response from './Response';

const TabsComponent = () => {
    const [activeTab, setActiveTab] = useState('prompt');

    const handleTabSelect = (tab) => {
      setActiveTab(tab);
    };
  
    return (
      <div className="my-tabs">
        <Tabs activeKey={activeTab} onSelect={handleTabSelect} id="my-tabs" justify>
            <Tab eventKey="prompt" title="Code">
            {activeTab === 'prompt' && <Prompt />}
            </Tab>
            <Tab eventKey="response" title="Response">
            {activeTab === 'response' && <Response />}
            </Tab>
            <Tab eventKey="questions" title="Questions">
            {activeTab === 'questions' && <p>content 3</p>}
            </Tab>
        </Tabs>
      </div>
    );
  };
export default TabsComponent;
    