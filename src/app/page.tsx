"use client";

import AppWrapper from "./components/AppWrapper";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LineSeparator from "./components/UI_Components/LineSeparator";
import Button from "./components/UI_Components/Button";
import Card from "./components/UI_Components/Card";
import Select from "./components/UI_Components/Select";
import CardsContent from "./cards_content.json";
import { useState } from "react";

export default function Home() {
  const [selected, setSelected] = useState<string | null>(null);
  const [cardsContent, setCardsContent] = useState(CardsContent);

  function handleSelectChange(selected: string | null) {
    setSelected(selected);
  }

  return (
    <AppWrapper>
      <Header />
      <section className="banner-area">
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
            <Button>Agências</Button>
            <Button>Chatbot</Button>
            <Button>Marketing Digital</Button>
            <Button>Geração de Leads</Button>
            <Button>Mídia Paga</Button>
          </div>
          <div className="select-area">
            <p>Ordenar por</p>
            <div>
              <Select
                options={["option 1", "option 2", "option 3", "option 4"]}
                defaultValue="Data de publicação"
                value={selected}
                onChange={handleSelectChange}
              />
            </div>
          </div>
        </div>
        <LineSeparator spacing="1em" />
        <div className="videos-content">
          {cardsContent.map((card, index) => (
            <div key={index}>
              <Card image_url={card.image_url} description={card.description} />
            </div>
          ))}
        </div>
        <LineSeparator spacing="3em" />
        <div className="videos-footer">
          <h3>Página</h3>
          <Button variant="tertiary" square>
            1
          </Button>
          <Button variant="tertiary" square>
            2
          </Button>
          <Button variant="tertiary" square>
            3
          </Button>
          <Button variant="tertiary" square>
            4
          </Button>
        </div>
      </section>
      <section className="leads-area">
        <div className="img-area">
          <img
            src="https://res.cloudinary.com/domwy2hmn/image/upload/v1688066200/comparativo_img_CTA_fznyku.png"
            alt="img-ad"
          />
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
              <img
                src="https://res.cloudinary.com/domwy2hmn/image/upload/v1688071005/selo_RD_cmy8zw.png"
                alt="top-10-img"
              />
            </div>
            <div className="card-review-area">
              <div>
                <img
                  src="https://res.cloudinary.com/domwy2hmn/image/upload/v1688071248/no-card-dark_zwmgsy.webp"
                  alt="card-small"
                />
                <small>Não é necessário cartão de crédito</small>
              </div>
              <span>|</span>
              <div>
                <img
                  src="https://res.cloudinary.com/domwy2hmn/image/upload/v1688071416/rating_mngnye.webp"
                  alt="stars-rating"
                />
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
