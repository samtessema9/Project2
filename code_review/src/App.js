import logo from './logo.svg';
import './App.css';
import Prompt from './components/Prompt';
import Response from './components/Response';
import Search from './components/Search';

const App = () => {

  let prompt = true;

  return (
    <div className="App">
      <Search />
      {prompt ? <Prompt /> : <Response />}
    </div>
  );
}

export default App;
