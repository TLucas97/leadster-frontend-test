"use client";

import { styled } from "styled-components";
import { leadster_logo } from "../utils/app_images";

const HeaderStyles = styled.header`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Header() {
  return (
    <HeaderStyles>
      <img
        src={leadster_logo}
        alt="leadster-logo"
        data-testid="header-leadster-logo"
        id="header"
      />
    </HeaderStyles>
  );
}
