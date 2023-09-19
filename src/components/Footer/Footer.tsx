"use client"

import { FlexBoxContainer } from "../FlexBoxContainer/FlexBoxContainer";
import { StyleLink } from "../Link/StyleLink";
import { StyleText } from "../Text/StyleText";
import FooterLinks from "./FooterLinks/FooterLinks";
import { StyleFooter } from "./StyleFooter";

export default function Footer() {
  return (
    <>
      <FooterLinks />
      <StyleFooter>
        <StyleText tag="p" fontSize="xxs" color="light">Copyright © 2023 - All Right Reserved</StyleText>

        <FlexBoxContainer>
          <StyleLink href="/" linkStyle="light">Terms</StyleLink>
          <StyleLink href="/" linkStyle="light">Privacy</StyleLink>
          <StyleLink href="/" linkStyle="light">Security</StyleLink>
        </FlexBoxContainer>
      </StyleFooter>
    </>
  )
}