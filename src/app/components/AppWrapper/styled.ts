"use client";

import { styled } from "styled-components";
import { colors } from "../../../../global-colors";

export const AppWrapperContainerStyles = styled.main`
  width: 100%;
  height: 100%;
  background-color: ${colors.white[100]};

  .view {
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    background-color: ${colors.white[100]};
  }
`;
