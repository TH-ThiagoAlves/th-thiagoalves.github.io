import React from "react";
import estrelas from '../../assests/img/estrelas.png';
import './style.css';

export default function Curriculum() {
    return (
        <section className="introdution-container">
            <img src={ estrelas } alt="estrelas" className="stars-animation" />
        </section>
    )
}