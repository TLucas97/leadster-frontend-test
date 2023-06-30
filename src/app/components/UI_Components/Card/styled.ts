"use client";

import { styled } from "styled-components";
import { colors } from "../../../../../global-colors";

export const CardStyles = styled.div`
  background-color: ${colors.white[100]};
  width: 310px;
  height: 230px;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.1);
  border-radius: 1em;
  display: flex;
  flex-direction: column;

  @media (max-width: 310px) {
        width: 100%;
    }

  .card-banner {
    width: 100%;
    height: 70%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .card-description {
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 2em;

    p {
        font-size: 0.9rem;
        font-weight: 600;
    }
  }
`;
