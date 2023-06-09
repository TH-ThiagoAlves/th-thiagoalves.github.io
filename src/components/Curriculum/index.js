import React from "react";
import estrelas from '../../assests/img/estrelas.png';
import cv from '../../assests/documents/ThiagoAlves.pdf';
import './style.css';

export default function Curriculum() {
    return (
        <section className="introdution-container">
            <img src={ estrelas } alt="estrelas" className="stars-animation" />
            <h1>
                <small>Olá, eu sou um</small> Full Stack Developer
            </h1>
            <button type="button">
                <a href={cv} download>Download CV</a>
            </button>
        </section>
    )
}