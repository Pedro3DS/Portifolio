import '../../css/App.css';
import './header.css'
import {React} from "react";

function Header() {
  return (
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
  );
}

export default Header;
