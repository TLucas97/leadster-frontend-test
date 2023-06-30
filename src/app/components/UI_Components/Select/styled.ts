"use client";

import { styled } from "styled-components";
import { colors } from "../../../utils/global-colors";

export const SelectStyles = styled.select`
  border: 2px solid ${colors.dark[100]};
  background-color: ${colors.white[100]};
  border-radius: 0.5em;
  padding: 0.1em 0.5em;
  font-size: 1rem;
  width: 100%;
  box-sizing: border-box;
`;
