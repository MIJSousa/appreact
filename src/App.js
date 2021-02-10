import logo from './logo.svg';
import './App.css';


import Search from "./Search";
import Forecast from "./Forecast";

function App() {
  return (
    <div className="App">
      <div className="page">
      <div className="container">
        <Search />
        
        <Forecast />
    
      </div>
    <p id="pGitHub">
    <a href="" target="_blank" id="gitHub">Open-source code </a>
     by Marina Sousa</p>
    </div>

    </div>
  );
}

export default App;
