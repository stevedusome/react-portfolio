import './App.css';
import MainMenu from './MainMenu'
import PortfolioPage from './PortfolioPage';
import ContactPage from './ContactPage'

import Background from './assets/marble.jpg';

var sectionStyle = {
  backgroundImage: `url(${Background})`,
  backgroundPosition: 'bottom',
  backgroundSize: 'cover',
  backgroundRepeat: 'repeat'
};

function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">
        <h1 className="headerh1">nxghtswxm dsn</h1>
        <div className="flexgap">
        <nav className="navbar activenav">ABOUT ME</nav>
        <nav className="navbar">PORTFOLIO</nav>
        <nav className="navbar">CONTACT</nav>
        <nav className="navbar">RESUME</nav>
        </div>
      </header>

      <div className="parent fullparent" style={ sectionStyle }>

      <div className="bigbtn">
        <div className="arrow-left">
        </div>
        

      </div>

      <div className="maindiv">
      <ContactPage />

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
