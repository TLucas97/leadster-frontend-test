"use client";

import styled from "styled-components";
import { colors } from "../../../utils/global-colors";

export const ModalContainerStyles = styled.div`
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

  .modal {
    background-color: ${colors.white[100]};
    border-radius: 0.5em;
    position: relative;
    width: 550px;
    height: 670px;

    @media (max-width: 580px) {
      width: 100%;
    }

    @media (max-width: 480px) {
      height: 750px;
      overflow-x: scroll;
      padding-bottom: 2em;
    }

    .top-line {
      width: 100%;
      height: 5px;
      background-color: ${colors.primary[200]};
      border: none;
      border-radius: 0.5em 0.5em 0 0;
    }

    span {
      position: absolute;
      top: 0.5em;
      right: 0.5em;
      cursor: pointer;
    }

    .content {
      margin-top: 0.6em;
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;

      .title {
        width: 100%;
        height: 15%;
        padding: 1em;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.3em;

        strong {
          color: ${colors.primary[200]};
        }
      }

      .video-area {
        width: 100%;
        height: 50%;
        background-color: ${colors.dark[200]};

        iframe {
          width: 100%;
          height: 100%;
        }
      }

      .description {
        width: 100%;
        height: 35%;
        padding: 1em;
        color: ${colors.dark[200]};

        p {
          font-size: 0.8rem;
        }

        h4:nth-of-type(2) {
          margin-top: 0.8em;
        }

        .downloads {
          display: flex;
          gap: 1em;

          @media (max-width: 480px) {
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
            width: 100%;
          }
        }
      }
    }
  }
`;
