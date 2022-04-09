import './App.css';
import MainMenu from './MainMenu'
import PortfolioPage from './PortfolioPage';

function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">
        <h1 className="headerh1">nxghtswxm dsn</h1>
        <div className="flexgap">
        <nav class="navbar activenav">ABOUT ME</nav>
        <nav class="navbar">PORTFOLIO</nav>
        <nav class="navbar">CONTACT</nav>
        <nav class="navbar">RESUME</nav>
        </div>
      </header>

      <div className="parent">

      <div className="bigbtn">
        <div className="arrow-left">
        </div>
        

      </div>

      <div className="maindiv">
      <PortfolioPage />

      </div>

      <div className="bigbtn">
        <div className="arrow-right">

        </div>
        
        </div>
      </div>
    </div></>
  );
}

export default App;
