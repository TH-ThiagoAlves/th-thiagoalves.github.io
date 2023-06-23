import React from "react";
import './style.css';
import logo from '../../logo.svg';
import teste from '../../assests/img/teste01.png';

export default function Hearder() {
    return (
        <header>
            <nav>
                <div className="container-logo">
                    <img src={logo} alt="logo-fundo" />
                    <img src={teste} alt="log" />
                </div>
                <ul>
                    <li>Inicio</li>
                    <li>Sobre Mim</li>
                    <li>Projetos</li>
                    <li>Contato</li>
                </ul>
                <button type="button">Butão</button>
            </nav>
        </header>
    )
}