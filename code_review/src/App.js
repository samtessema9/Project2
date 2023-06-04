import React, {useContext} from 'react';
import { primaryContext } from './context/primaryContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import TabsComp from './components/Tabs';
import Search from './components/Search';
import Tabs from './components/Tabs';

const App = () => {

  const {prompt, response} = useContext(primaryContext)

  return (
    <div className="App">

      <Tabs />
      
  
    </div>
  );
}

export default App;
