import './App.css';
import Search from "./Search";
import Forecast from "./Forecast";

export default function App() {
  return (
    <div className="App">
    <div className="container">  
    <div className="intContainer">  
        <Search defaultCity="Porto"/>
        <Forecast />
    </div>
    <footer>
    <a href="https://github.com/MIJSousa/appreact" target="_blank">Open-source code </a>
    by Marina Sousa.
    </footer>
    </div>
    </div>
  );
}
