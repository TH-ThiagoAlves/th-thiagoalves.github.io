import React from "react";
import './style.css';
import logo from '../../logo.svg';
import teste from '../../assests/img/teste01.png';
// <img src="aa" alt="logo" />

export default function Hearder() {
    return (
        <main>
            <div className="container-logo">
                <img src={logo} alt="logo-fundo" />
                <img src={teste} alt="log" />
            </div>
            <div>
                Menu
                <nav>

                </nav>
            </div>
        </main>
    )
}