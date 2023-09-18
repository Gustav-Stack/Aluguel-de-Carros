import React from "react";
import "./styles/testimonials.css";

import { TbReceiptTax } from "react-icons/tb";
import { BiWorld } from "react-icons/bi";

import { BsCashCoin } from "react-icons/bs";

export default function Testimonials() {
  return (
    <div>
      <img
        src="https://freepngimg.com/download/toyota/4-toyota-png-image-car-image.png"
        alt="imagem de um carro"
      ></img>
      <div className="testimonials">
        <div className="testimonials-desc">
          <h3>Porque nos Escolher</h3>
          <h1>Melhor Custo Benefício que você vai encontrar</h1>
          <p>
            Nós nos preocupamos demais com nossos clientes, por isso estamos
            sempre atentos para oferecer os melhores preços e serviços sempre
            com a maior disponibilidade, tudo isso pensando em você, temos uma
            equipe especialista que trabalhar incasavelmente para achar os
            melhores match para que você possa alugar seu carro com
            tranquilidade.
          </p>
          <button className="testimonials-button">Ver Detalhes</button>
        </div>
        <div className="testimonials-details">
          <div className="why-choose-us">
            <BiWorld className="icon" size={150} />
            <div>
              <h2>Suporte Entre Estados</h2>
              <p>
                Levamos suas viagens a sério, por isso oferecemos diversos
                pontos tanto de entrega quanto de retirada para que você possa
                se aventurar em outros estados.
              </p>
            </div>
          </div>
          <div className="why-choose-us">
            <BsCashCoin className="icon" size={75} />
            <div>
              <h2>Preço com tudo incluso</h2>
              <p>
                Tudo que você precisa já está incluso no preço, com total
                transparência de preço sem enrolação.
              </p>
            </div>
          </div>
          <div className="why-choose-us">
            <TbReceiptTax className="icon" size={100} />
            <div>
              <h2>Sem taxas surpresa</h2>
              <p>
                Acreditamos que a transparência é o melhor elemento em uma
                negociação, por isso mantemos todos os preços no seu devido
                lugar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
