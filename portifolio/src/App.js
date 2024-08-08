import './css/App.css';
import {React} from "react";
import Picture from "./blank-profile-picture-973460_1280.webp";
import Header from './components/Header/Header';
import { FaGithub, FaLinkedin, FaInstagram, FaItchIo } from "react-icons/fa";

function App() {
  return (
    <div className="main">
      <Header/>
      <div className="container1">
        <div className="content">
          <div className='row '>

            <div className="infos">

              <h1>👋Olá, eu sou <span>Pedro Diniz</span></h1>
              <p>Desenvolvedor Web Full-Stack & Desenvolvedor de Jogos Digitais</p>
              <div className='socialmidia'>
                <div className='socialmidias'>
                  <a href='https://github.com/Pedro3DS' target='_black'><FaGithub/></a>
                  <a href='https://www.linkedin.com/in/PedroDinizSantana/' target='_black'><FaLinkedin/></a>
                  <a href='https://www.instagram.com/pedro_3ds' target='_black'><FaInstagram/></a>
                  <a href='https://pedro3ds.itch.io' target='_black'><FaItchIo/></a>

                </div>
                <div className='socialmidia-effect'></div>
              </div>
            </div>
            <div className="picture" >
              <img src={Picture} alt='qwer' className='profile-picture'/>
            </div>
          </div>
        </div>
      </div>
      <div className="about">
        
      </div>
    </div>
  );
}

export default App;
