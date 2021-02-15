import logo from './logo.svg';
import './App.css';


import Search from "./Search";
import Forecast from "./Forecast";

function App() {
  return (
    <div className="App">
      <div className="page">
      <div>
        <Search />
        <Forecast />
      </div>
    </div>

    </div>
  );
}

export default App;
