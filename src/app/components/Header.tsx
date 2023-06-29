"use client";

import { styled } from "styled-components";

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
        src="https://res.cloudinary.com/domwy2hmn/image/upload/v1688051274/logo_pmmkx8.png"
        alt=""
      />
    </HeaderStyles>
  );
}
