"use client";

import { styled } from "styled-components";
import { colors } from "../../../../../global-colors";
import { ButtonProps } from "./interface";

const bgColors = {
  primary: colors.primary[200],
  secondary: colors.white[100],
  tertiary: colors.white[100],
};

export const ButtonStyles = styled.button<ButtonProps>`
  background-color: ${(props) => bgColors[props.variant || "primary"]};
  color: ${(props) =>
    props.variant === "primary"
      ? colors.white[100]
      : props.variant === "tertiary"
      ? colors.primary[200]
      : colors.dark[200]};
  border: 1px solid
    ${(props) =>
      props.variant === "primary"
        ? colors.primary[200]
        : props.variant === "tertiary"
        ? colors.primary[200]
        : colors.dark[200]};
  padding: 0.4em 0.9em;
  border-radius: ${(props) => (props.square === true ? "0.3em" : "1em")};
  font-weight: 600;
  cursor: pointer;
`;
