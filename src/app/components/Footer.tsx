"use client";

import { styled } from "styled-components";
import { colors } from "../utils/global-colors";
import { BiLogoFacebook } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa";
import { SlSocialInstagram } from "react-icons/sl";
import { leadster_logo } from "../utils/app_images";
import LineSeparator from "./UI_Components/LineSeparator";

const FooterStyles = styled.footer`
  width: 100%;
  height: 465px;

  .footer-header {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 0.5em;
    color: ${colors.dark[300]};
    width: 100%;
    height: 150px;
    font-weight: 600;
  }

  .links {
    width: 1180px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

    @media (max-width: 1280px) {
      flex-wrap: wrap;
      width: 90%;
      gap: 2em;
    }

    .links-list {
      display: flex;
      flex-direction: column;
      font-size: 0.9rem;

      @media (max-width: 1280px) {
        width: 250px;
      }

      a:nth-of-type(1) {
        margin-top: 2em;
      }

      a {
        color: ${colors.dark[300]};
        text-decoration: none;
        margin: 0.8em 0;
        transition: color 0.2s ease-in-out;

        &:hover {
          color: ${colors.primary[200]};
        }
      }

      .icons-area {
        display: flex;
        gap: 0.8em;
        margin-top: 2em;

        span {
          padding: 0.7em;
          background: ${colors.gray[100]};
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 100%;
        }
      }
    }
  }

  .footer-bottom {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    color: ${colors.dark[300]};

    strong {
      color: ${colors.primary[200]};
    }

    @media (max-width: 980px) {
      flex-direction: column;
      padding: 0 0.5em 1.8em 0.5em;
      gap: 1em;
    }

    @media (max-width: 520px) {
      text-align: center;
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyles>
      <div className="footer-header">
        <img src={leadster_logo} alt="logo" data-testid="footer-leadster-logo" />
        <small>Transformando visitantes em clientes</small>
      </div>
      <div className="links">
        <div className="links-list">
          <h4>Links principais</h4>
          <a href="#header">Home</a>
          <a href="#">Ferramenta</a>
          <a href="#">Preços</a>
          <a href="#">Contatos</a>
        </div>
        <div className="links-list">
          <h4>Cases</h4>
          <a href="#">Geração de leads B2B</a>
          <a href="#">Geração de leads em Software</a>
          <a href="#">Geração de leads em Imobiliária</a>
          <a href="#">Cases de sucesso</a>
        </div>
        <div className="links-list">
          <h4>Materiais</h4>
          <a href="#">Blog</a>
          <a href="#">Parceria com agências</a>
          <a href="#">Guia definitivo do marketing</a>
          <a href="#">Materiais gratuitos</a>
        </div>
        <div className="links-list">
          <h4>Siga a leadster</h4>
          <div className="icons-area">
            <span>
              <FaLinkedinIn color="#828282" />
            </span>
            <span>
              <BiLogoFacebook color="#828282" />
            </span>
            <span>
              <SlSocialInstagram color="#828282" />
            </span>
          </div>
          <a href="#">
            <strong>Email:</strong> contato@leadster.com.br
          </a>
          <a href="#">
            <strong>Telefone:</strong> (42) 98828-9851
          </a>
        </div>
      </div>
      <div className="line-limiter">
        <LineSeparator spacing="2em" />
      </div>
      <div className="footer-bottom" data-testid="footer-last-texts">
        <div>
          <small>
            Copyright 0 2015 - 2022 Todos os direitos reservados{" "}
            <strong>Ledster</strong>
          </small>
        </div>
        <div>
          <small>
            Rua José Loureiro, 464 - Centro - Curitiba PR - CEP: 80010-000 |
            Termos de uso
          </small>
        </div>
      </div>
    </FooterStyles>
  );
}
