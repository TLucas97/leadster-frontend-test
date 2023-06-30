"use client";

import AppWrapper from "./AppWrapper";
import Header from "./Header";
import Footer from "./Footer";
import LineSeparator from "./UI_Components/LineSeparator";
import Button from "./UI_Components/Button";
import Card from "./UI_Components/Card";
import Select from "./UI_Components/Select";
import CardsContent from "../utils/cards_content.json";
import VideoModal from "./UI_Components/VideoModal";
import { AiOutlineClose } from "react-icons/ai";
import {
  img_ad,
  top_10_img,
  card_small,
  rating_stars,
  leadster_icon,
} from "../utils/app_images";
import { styled } from "styled-components";
import { defineTheme } from "../utils/global-colors";
import { useState } from "react";

const colors = defineTheme("leadster");

export const metadata = {
  title: "Leadster - Frontend Test",
  description: "Frontend Test for Leadster company",
};

export default function MainApp() {
  const [selected, setSelected] = useState<string | null>(null);
  const [miniModalView, setMiniModalView] = useState(false);
  const [cardsContent, setCardsContent] = useState(CardsContent);
  const [videoModalView, setVideoModalView] = useState(false);
  const [videoModalUrl, setVideoModalUrl] = useState("");
  const [videoModalTitle, setVideoModalTitle] = useState("");
  const [videoModalDescription, setVideoModalDescription] = useState("");

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

  const MiniModal = styled.div`
    @keyframes scaleIn {
      0% {
        transform: scale(0.5);
      }
      100% {
        transform: scale(1);
      }
    }

    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100vw;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;

    .mini-modal {
      background-color: ${colors.white[100]};
      width: 250px;
      padding: 1.5em;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1em;
      border-radius: 15px;
      position: relative;
      animation: scaleIn 0.5s ease-in-out;

      .close-btn {
        position: absolute;
        top: 0.4em;
        right: 0.7em;
      }
    }
  `;

  function handleSelectChange(selected: string | null) {
    setSelected(selected);
  }

  function handleVideoModalView(
    url: string,
    title: string,
    description: string
  ) {
    setVideoModalUrl(url);
    setVideoModalTitle(title);
    setVideoModalDescription(description);
    setVideoModalView(true);
  }

  return (
    <AppWrapper>
      <>
        <Header />
        <section className="banner-area" data-testid="main">
          <Chip>WEBINARS EXCLUSIVOS</Chip>
          <h2>Menos conversinha</h2>
          <div className="highlight-text-box">
            <h1 data-testid="highlighted-text">Mais conversão</h1>
            <div>
              <img
                src={leadster_icon}
                alt="leadster_icon"
                className="leadster-icon-img"
              />
            </div>
          </div>
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
            <div className="menu-btn" onClick={() => setMiniModalView(true)}>
              <Button variant="tertiary">Menu</Button>
            </div>
            {miniModalView && (
              <MiniModal>
                <div className="mini-modal">
                  <div
                    className="close-btn"
                    onClick={() => setMiniModalView(false)}
                  >
                    <AiOutlineClose />
                  </div>
                  <Button variant="secondary">Agências</Button>
                  <Button variant="secondary">Chatbot</Button>
                  <Button variant="secondary">Marketing Digital</Button>
                  <Button variant="primary">Geração de Leads</Button>
                  <Button variant="secondary">Mídia Paga</Button>
                </div>
              </MiniModal>
            )}
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
                <Card
                  image_url={card.image_url}
                  description={card.title}
                  onClick={() =>
                    handleVideoModalView(
                      card.video_url,
                      card.title,
                      card.description
                    )
                  }
                />
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
            <img src={img_ad} alt="img-ad" data-testid="ad-img" />
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
        <VideoModal
          isOpen={videoModalView}
          title={videoModalTitle}
          description={videoModalDescription}
          video_url={videoModalUrl}
          onClose={() => setVideoModalView(false)}
        />
      </>
    </AppWrapper>
  );
}
