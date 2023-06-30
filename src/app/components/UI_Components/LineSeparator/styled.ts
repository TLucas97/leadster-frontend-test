"use client";

import styled from "styled-components";
import { LineSeparatorProps } from "./interface";
import { colors } from "../../../utils/global-colors";

export const LineSeparatorStyles = styled.hr<LineSeparatorProps>`
  width: 100%;
  height: 1px;
  border: none;
  opacity: 0.6;
  background-color: ${(props) => props.bgColor || colors.gray[200]};
  margin: ${(props) => props.spacing || 0} 0;
`;
