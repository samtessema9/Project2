import React, {useContext, useState} from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Prompt from './Prompt';
import Response from './Response';
import Github from './Github';
import { primaryContext } from '../context/primaryContext';

const TabsComponent = () => {
    const {activeTab, setActiveTab} = useContext(primaryContext);

    const handleTabSelect = (tab) => {
      console.log(tab)
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
            <Tab eventKey="github" title="Github">
            {activeTab === 'github' && <Github />}
            </Tab>
        </Tabs>
      </div>
    );
  };
export default TabsComponent;
    