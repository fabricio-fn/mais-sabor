"use client"

import { StyleNav } from "./StyleNav";
import { StyleLink } from "@/components/Link/StyleLink";

export default function Nav() {
  return (
    <StyleNav>
      <StyleLink linkStyle="normal" href="/">Início</StyleLink>
      <StyleLink linkStyle="normal" href="/">Review</StyleLink>
      <StyleLink linkStyle="normal" href="/">Sobre</StyleLink>
      <StyleLink linkStyle="normal" href="/">Contato</StyleLink>
    </StyleNav>
  )
}