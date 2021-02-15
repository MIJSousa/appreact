import logo from './logo.svg';
import './App.css';



import Search from "./Search";
import Forecast from "./Forecast";

function App() {
  return (
    <div className="App">
    
      <div className="container">
        <div className="page">
      <div>
        <Search />
        <Forecast />
      </div>
     
    </div>
    <p id="pGitHub">
    <a href="https://github.com/MIJSousa/appreact" target="_blank" id="gitHub">Open-source code </a>
    by Marina Sousa
    </p>
    </div>
    </div>
  );
}

export default App;
