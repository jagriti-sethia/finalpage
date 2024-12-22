import { Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Roc8 moonshoot</h1>
        <div>
          <button className='button1'> <Link className='link' to="https://jagritiroc8outlook.netlify.app/">outlook </Link> </button>
          <button className='button2'> <Link className='link' to="https://jagriti-roc8-analyzer-site.netlify.app/">Analyser </Link> </button>
        </div>
      </header>
    </div>
  );
}

export default App;
