import './css/App.css';
import './'
import {React} from "react";
import Picture from "./blank-profile-picture-973460_1280.webp";

function App() {
  return (
    <div className="Container">
      <div className="Container1">
        <div className="Header">
          <div className="Name">
            <h1>Pedro Diniz</h1>
          </div>
          <div className="Links">
            <p>Sobre mim</p>
            <p>Técnologias</p>
            <p>Projetos</p>
            <p>Jogos</p>
          </div>
        </div>  
        <div className="Contant">
          <div className="Infos">

            <h1>👋Olá, eu sou <span>Pedro Diniz Santana</span></h1>
            <p>Desenvolvedor Web Full-Stack & Desenvolvedor de Jogos Digitais</p>
          </div>
          <div className="Picture" >
            <img src={Picture} alt='qwer' className='ProfilePicture'/>
          </div>
        </div>
      </div>
      <div className="About">
        
      </div>
    </div>
  );
}

export default App;
