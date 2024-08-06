import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [currentTime, setCurrentTime] = useState();

  useEffect(() => {
    (async () => {
      const response = await fetch('/time')
      const results = await response.json()
      setCurrentTime(results.time)
    })();
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>{currentTime}</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
