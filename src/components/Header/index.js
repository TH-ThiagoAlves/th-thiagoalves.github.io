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
                    <li>Home</li>
                    <li>Projetcs</li>
                    <li>About</li>
                    <li>Contatar</li>
                </ul>
                <button type="button">Botão</button>
            </nav>
        </header>
    )
}