import React, { useRef } from "react";
import estrelas from '../../assests/img/estrelas.png';
import cv from '../../assests/documents/ThiagoAlves.pdf';
import './style.css';

export default function Curriculum() {
  const particlesContainerRef = useRef(null);

  // Função para criar uma partícula quando o mouse se move
  const createParticle = (event) => {
    // Cria um elemento <div> para representar a partícula
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = (event.clientX - 5) + 'px';
    particle.style.top = (event.clientY - 5) + 'px';
    // Adiciona a partícula ao contêiner de partículas
    particlesContainerRef.current.appendChild(particle);
    // Remove a partícula após 1 segundo
    setTimeout(() => {
      particle.remove();
    }, 1000);
  };

  return (
    <section className="introdution-container" onMouseMove={createParticle}>
      <img src={estrelas} alt="estrelas" className="stars-animation" />
      <h1>
        <small>Olá, eu sou um</small> Full Stack Developer
      </h1>
      <button type="button">
        <a href={cv} download>Download CV</a>
      </button>
      <div className="particles-container" ref={particlesContainerRef} />
    </section>
  )
}
