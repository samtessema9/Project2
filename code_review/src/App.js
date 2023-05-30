import React, {useContext} from 'react';
import { primaryContext } from './context/primaryContext';

import './App.css';
// import TabsComp from './components/Tabs';
import Search from './components/Search';
import UncontrolledExample from './components/Tabs';

const App = () => {

  const {prompt, response} = useContext(primaryContext)

  return (
    <div className="App">
      <Search />
      <UncontrolledExample />
  
    </div>
  );
}

export default App;
