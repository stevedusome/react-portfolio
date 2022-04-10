import './App.css';
import {useState} from 'react';
import MainMenu from './components/MainMenu'
import PortfolioPage from './components/PortfolioPage';
import ContactPage from './components/ContactPage';
import ResumePage from './components/ResumePage'

import Background from './assets/marble.jpg';

var sectionStyle = {
  backgroundImage: `url(${Background})`,
  backgroundPosition: 'bottom',
  backgroundSize: 'cover',
  backgroundRepeat: 'repeat'
};

function App() {
  const [currentPage, setCurrentPage] = useState("Home");

  function render () {
    if(currentPage === "Home") {
      return <MainMenu />
    } else if(currentPage === "Portfolio") {
      return <PortfolioPage />
    } else if (currentPage === "Contact") {
      return <ContactPage />
    }else if (currentPage === "Resume") {
      return <ResumePage />
    }
   }

   function renderActive (event) {
    document.querySelector(".activenav").classList.remove("activenav");
    event.target.classList.add("activenav");
   }

  return (
    <>
    <div className="App">
      <header className="App-header">
        <h1 className="headerh1">nxghtswxm dsn</h1>
        <div className="flexgap">
        <nav onClick={(event) => {
          setCurrentPage("Home");
          renderActive(event)
        }} className="navbar activenav">ABOUT ME</nav>
        <nav onClick={(event) => {
          setCurrentPage("Portfolio");
          renderActive(event)

        }} className="navbar">PORTFOLIO</nav>
          <nav onClick={(event) => {
          setCurrentPage("Contact");
          renderActive(event)

        }}  className="navbar">CONTACT</nav>
        <nav onClick={(event) => {
          setCurrentPage("Resume");
          renderActive(event)

        }} className="navbar">RESUME</nav>
        </div>
      </header>

      <div className="parent fullparent" style={ sectionStyle }>

      <div className="bigbtn">
        <div className="arrow-left">
        </div>
        

      </div>

      <div className="maindiv">
      {render()}

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
