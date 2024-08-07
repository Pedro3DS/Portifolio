import './css/App.css';
import {React} from "react";
import Picture from "./blank-profile-picture-973460_1280.webp";
import Header from './components/Header/Header';
import { FaGithub } from "react-icons/fa";

function App() {
  return (
    <div className="Container">
      <Header/>
      <div className="Container1">
        <div className="Content">
          <div className="Infos">

            <h1>👋Olá, eu sou <span>Pedro Diniz Santana</span></h1>
            <p>Desenvolvedor Web Full-Stack & Desenvolvedor de Jogos Digitais</p>
          </div>
          <div className="Picture" >
            <img src={Picture} alt='qwer' className='ProfilePicture'/>
            <FaGithub/>
          </div>
        </div>
      </div>
      <div className="About">
        
      </div>
    </div>
  );
}

export default App;
