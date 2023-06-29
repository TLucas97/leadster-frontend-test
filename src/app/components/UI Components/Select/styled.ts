"use client"

import { styled } from "styled-components"
import { colors } from "../../../../../global-colors"

export const SelectStyles = styled.select`
    border: 2px solid ${colors.dark[100]};
    background-color: ${colors.white[100]};
    border-radius: 4px;
    padding: 0.5rem;
    font-size: 1rem;
    line-height: 1.5;
    width: 100%;
    box-sizing: border-box;
`