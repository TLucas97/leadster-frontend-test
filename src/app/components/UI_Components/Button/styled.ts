"use client";

import { styled } from "styled-components";
import { colors } from "../../../../../global-colors";
import { ButtonProps } from "./interface";

const bgColors = {
  primary: colors.primary[200],
  secondary: colors.white[100],
  tertiary: colors.white[100],
  text: "transparent",
  square: colors.white[100],
};

const getBackgroundColor = (props: ButtonProps) => {
  const variant = props.variant ?? "primary";
  return bgColors[variant];
};

const getColor = (props: ButtonProps) => {
  const variant = props.variant ?? "primary";
  if (variant === "primary") {
    return colors.white[100];
  } else if (variant === "tertiary") {
    return colors.primary[200];
  } else if (variant === "text") {
    return colors.dark[100];
  } else {
    return colors.dark[200];
  }
};

const getBorderColor = (props: ButtonProps) => {
  const variant = props.variant ?? "primary";
  if (variant === "primary" || variant === "tertiary") {
    return colors.primary[200];
  } else if (variant === "text") {
    return 'white';
  } else {
    return colors.dark[200];
  }
};

export const ButtonStyles = styled.button<ButtonProps>`
  background-color: ${getBackgroundColor};
  color: ${getColor};
  border: ${(props) => props.variant !== "text" && "1px solid"} ${getBorderColor};
  padding: 0.4em 1.2em;
  border-radius: ${(props) => (props.variant === "square" ? "0.3em" : "2.5em")};
  font-weight: 600;
  cursor: pointer;
  pointer-events: ${(props) => props.disabled && "not-allowed"};
  transition: color 0.1s ease-in-out, background-color 0.1s ease-in-out;

  &:hover {
    background-color: ${(props) => props.variant === "primary" && colors.white[100]};
    border: 1px solid ${colors.primary[200]};
    color: ${colors.primary[200]};
  }

  .btn {
    opacity: ${(props) => props.disabled && "0.5"};
  }
`;
