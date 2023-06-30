"use client";

import AppWrapper from "./components/AppWrapper";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LineSeparator from "./components/UI_Components/LineSeparator";
import Button from "./components/UI_Components/Button";
import Card from "./components/UI_Components/Card";
import Select from "./components/UI_Components/Select";
import CardsContent from "./cards_content.json";
import { img_ad, top_10_img, card_small, rating_stars } from "@/app_images";
import { styled } from "styled-components";
import { colors } from "../../global-colors";
import { useState } from "react";

export default function Home() {
  const [selected, setSelected] = useState<string | null>(null);
  const [cardsContent, setCardsContent] = useState(CardsContent);

  const Chip = styled.div`
    background: transparent;
    border: 2px solid ${colors.primary[200]};
    border-radius: 53px 53px 53px 21px;
    -moz-border-radius: 53px 53px 53px 21px;
    -webkit-border-radius: 53px 53px 53px 21px;
    color: ${colors.primary[200]};
    font-weight: bold;
    padding: 0.5em 1em;
    font-size: 0.8rem;
    margin-bottom: 1.5em;
  `;

  function handleSelectChange(selected: string | null) {
    setSelected(selected);
  }

  return (
    <AppWrapper>
      <Header />
      <section className="banner-area">
        <Chip>WEBINARS EXCLUSIVOS</Chip>
        <h2>Menos conversinha</h2>
        <h1>Mais conversão</h1>
        <div className="line-size">
          <LineSeparator spacing="1em" />
        </div>
        <p>
          Conheça as estratégias <strong>que mudaram o jogo</strong> e como
          aplicá-las no seu negócio
        </p>
      </section>
      <section className="videos-area">
        <div className="videos-header">
          <div className="header-options">
            <Button variant="secondary">Agências</Button>
            <Button variant="secondary">Chatbot</Button>
            <Button variant="secondary">Marketing Digital</Button>
            <Button variant="primary">Geração de Leads</Button>
            <Button variant="secondary">Mídia Paga</Button>
          </div>
          <div className="menu-btn">
            <Button variant="tertiary">Menu</Button>
          </div>
          <div className="select-area">
            <p>Ordenar por</p>
            <div>
              <Select
                options={["option 1", "option 2", "option 3", "option 4"]}
                defaultValue="Selecione uma data"
                onChange={handleSelectChange}
              />
            </div>
          </div>
        </div>
        <LineSeparator spacing="1em" />
        <div className="videos-content">
          {cardsContent.map((card) => (
            <div key={card.id}>
              <Card image_url={card.image_url} description={card.description} />
            </div>
          ))}
        </div>
        <LineSeparator spacing="3em" />
        <div className="videos-footer">
          <h3>Página</h3>
          <div>
            <Button variant="square">1</Button>
            <Button variant="text">2</Button>
            <Button variant="text">3</Button>
            <Button variant="text">4</Button>
          </div>
        </div>
      </section>
      <section className="leads-area">
        <div className="img-area">
          <img src={img_ad} alt="img-ad" />
        </div>
        <div className="text-area">
          <div className="text-card">
            <h1>
              Pronto para triplificar sua <strong>Geração de leads?</strong>
            </h1>
            <p>
              Criação em ativação em <strong>4 minutos.</strong>
            </p>
            <LineSeparator spacing="1em" />
            <div className="demonstration">
              <Button variant="primary">VER DEMONSTRAÇÃO</Button>
              <img src={top_10_img} alt="top-10-img" />
            </div>
            <div className="card-review-area">
              <div>
                <img src={card_small} alt="card-small" />
                <small>Não é necessário cartão de crédito</small>
              </div>
              <span className="line-separator-small">|</span>
              <div>
                <img src={rating_stars} alt="stars-rating" />
                <small>
                  <strong>4.9</strong>/5 média de satisfação
                </small>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </AppWrapper>
  );
}
