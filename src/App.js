import './App.css';
import {useState} from 'react';
import MainMenu from './components/MainMenu'
import PortfolioPage from './components/PortfolioPage';
import ContactPage from './components/ContactPage';
import ResumePage from './components/ResumePage'

import Background from './assets/marble.jpg';

var sectionStyle = {
  backgroundImage: `url(${Background})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'repeat'
};

function App() {
  const [currentPage, setCurrentPage] = useState("Home");

  function renderNav () {
    if(currentPage === "Home") {
      return <>

      <nav onClick={() => {
          setCurrentPage("Home");

        }} className="navbar activenav" id="home-nav">ABOUT ME</nav>
        <nav onClick={() => {
          setCurrentPage("Portfolio");

        }} className="navbar" id="port-nav">PORTFOLIO</nav>
          <nav onClick={() => {
          setCurrentPage("Contact");

        }}  className="navbar" id="cont-nav">CONTACT</nav>
        <nav onClick={() => {
          setCurrentPage("Resume");

        }} className="navbar" id="resu-nav">RESUME</nav>
        </>

    } else if(currentPage === "Portfolio") {
      return <>
      <nav onClick={() => {
          setCurrentPage("Home");

        }} className="navbar" id="home-nav">ABOUT ME</nav>
        <nav onClick={() => {
          setCurrentPage("Portfolio");

        }} className="navbar activenav" id="port-nav">PORTFOLIO</nav>
          <nav onClick={() => {
          setCurrentPage("Contact");

        }}  className="navbar" id="cont-nav">CONTACT</nav>
        <nav onClick={() => {
          setCurrentPage("Resume");

        }} className="navbar" id="resu-nav">RESUME</nav>
      </>
    } else if (currentPage === "Contact") {
      return <>
      <nav onClick={() => {
          setCurrentPage("Home");

        }} className="navbar" id="home-nav">ABOUT ME</nav>
        <nav onClick={() => {
          setCurrentPage("Portfolio");

        }} className="navbar" id="port-nav">PORTFOLIO</nav>
          <nav onClick={() => {
          setCurrentPage("Contact");

        }}  className="navbar activenav" id="cont-nav">CONTACT</nav>
        <nav onClick={() => {
          setCurrentPage("Resume");

        }} className="navbar" id="resu-nav">RESUME</nav>
      </>
    }else if (currentPage === "Resume") {
      return <>
      <nav onClick={() => {
          setCurrentPage("Home");

        }} className="navbar" id="home-nav">ABOUT ME</nav>
        <nav onClick={() => {
          setCurrentPage("Portfolio");

        }} className="navbar" id="port-nav">PORTFOLIO</nav>
          <nav onClick={() => {
          setCurrentPage("Contact");

        }}  className="navbar" id="cont-nav">CONTACT</nav>
        <nav onClick={() => {
          setCurrentPage("Resume");

        }} className="navbar activenav" id="resu-nav">RESUME</nav>
      </>
    }
   }

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


  return (
    <>
    <div className="App">
      <header className="App-header">
        <h1 className="headerh1">nxghtswxm dsn</h1>
        <div className="flexgap navparent">
        {renderNav()}
        </div>
      </header>

      <div className="parent fullparent" style={ sectionStyle }>

      <div className="bigbtn"
      onClick={() => {
        var oldPage = currentPage;
        if (oldPage === "Home" ){
        setCurrentPage("Resume")}
        else if (oldPage === "Resume" ){
          setCurrentPage("Contact")} 
        else if (oldPage === "Contact" ){
          setCurrentPage("Portfolio")}
        else if (oldPage === "Portfolio" ){
            setCurrentPage("Home")} ;
      }}>
        <div className="arrow-left">
        </div>
        

      </div>

      <div className="maindiv">
      {render()}

      </div>

      <div className="bigbtn"  onClick={() => {
        var oldPage = currentPage;
        if (oldPage === "Home" ){
        setCurrentPage("Portfolio")}
        else if (oldPage === "Resume" ){
          setCurrentPage("Home")} 
        else if (oldPage === "Contact" ){
          setCurrentPage("Resume")}
        else if (oldPage === "Portfolio" ){
            setCurrentPage("Contact")} ;
      }}>
        <div className="arrow-right">

        </div>
        
        </div>
      </div>
    </div></>
  );
}

export default App;
