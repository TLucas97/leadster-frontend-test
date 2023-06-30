"use client";

import styled from "styled-components";
import type { SquareButtonChipProps } from "./interface";
import { colors } from "../../../utils/global-colors";

const iconBgColors = {
  primary: colors.primary[400],
  yellow: colors.yellow[200],
  success: colors.green[200],
};

const textBgColors = {
  primary: colors.primary[300],
  yellow: colors.yellow[100],
  success: colors.green[100],
};

export const SquareButtonChipStyles = styled.button<SquareButtonChipProps>`
  border: none;
  border-radius: 0.3em;
  display: flex;
  align-items: center;
  height: 30px;

  .icon-area {
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ variant }) => iconBgColors[variant]};
    height: 100%;
    border-top-left-radius: 0.3em;
    border-bottom-left-radius: 0.3em;

    .icon {
      padding: 0 0.6em;
    }
  }

  p {
    padding: 0 0.5em;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ variant }) => textBgColors[variant]};
  }
`;
