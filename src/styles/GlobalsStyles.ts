"use client"

import { createGlobalStyle } from "styled-components"

export const GlobalsStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        scroll-behavior: smooth;
    }

    section, header, footer {
        padding: 1rem 10%;
        display: flex;
        justify-content: center;
        align-items: center;

        @media (max-width: 768px) {
            padding: 1rem 5%;
        }
    }

    section { min-height: 100vh; }

    a {
        transition: .4s;
        font-weight: 700;
    }

    span { color: #F54748; }
`