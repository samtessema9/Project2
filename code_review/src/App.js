import logo from './logo.svg';
import './App.css';
import Prompt from './components/Prompt';
import Response from './components/Response';

function App() {
  return (
    <div className="App">
      <div id="first">
        <Prompt id='firstPrompt' />
        <Response id='firstResponse' />
      </div>
      <div id="second">
        <Prompt id='secondPrompt' />
        <Response id='secondResponse' />
      </div>
    </div>
  );
}

export default App;
