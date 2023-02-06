import React from 'react'

import { FacebookLogo, InstagramLogo, TwitterLogo } from 'phosphor-react';
import Accordion from "react-bootstrap/Accordion";

const FooterComponent = () => {
  return (
    <div
      id="footer"
      style={{
        backgroundColor: "#000000",
        color: "#ffffff",
        fontWeight: "100",
        padding: "5rem 2rem",
      }}
    >
      <div className="d-flex justify-content-evenly footer-list">
        <div className="row">
          <ul className="p-0">
            <h3>Ajuda</h3>
            <li>Dúvidas Gerais</li>
            <li>Pedidos</li>
            <li>Entregas</li>
            <li>Trocas e Devoluções</li>
            <li>Corporativo</li>
            <li>Fale Conosco</li>
          </ul>
        </div>
        <div>
          <ul className="p-0">
            <h3>Sobre Nós</h3>
            <li>Sustentabilidade</li>
            <li>Ações sociais</li>
          </ul>
        </div>
        <div>
          <h3>Redes Sociais</h3>
          <ul className="d-flex justify-content-between p-0">
            <li>
              <FacebookLogo size={32} />
            </li>
            <li>
              <InstagramLogo size={32} />
            </li>
            <li>
              <TwitterLogo size={32} />
            </li>
          </ul>
        </div>
      </div>
      <div className="d-lg-none">
        <div className="mt-4">
          <h3 className='text-center'>Redes Sociais</h3>
          <ul className="d-flex  p-0 justify-content-center">
            <li>
              <FacebookLogo size={32} />
            </li>
            <li>
              <InstagramLogo size={32} />
            </li>
            <li>
              <TwitterLogo size={32} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FooterComponent