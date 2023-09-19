"use client"

import { FlexBoxContainer } from "@/components/FlexBoxContainer/FlexBoxContainer"
import { StyleLink } from "@/components/Link/StyleLink"
import { StyleText } from "@/components/Text/StyleText"
import { StyleFooterLinks } from "./StyleFooterLinks"
import { StyleBadge } from "@/components/Badge/Badge"
import { RiTwitterXLine } from "react-icons/ri"
import { BiLogoFacebook, BiLogoLinkedin } from "react-icons/bi"
import { StyleButton } from "@/components/Button/StyleButton"

export default function FooterLinks() {
  return (
    <StyleFooterLinks>
      <FlexBoxContainer className="logo">
        <FlexBoxContainer>
          <StyleText tag="h2" fontSize="sm" color="light">
            <StyleBadge badgeStyle="transparent">+</StyleBadge>Flavor
          </StyleText>
        </FlexBoxContainer>

        <FlexBoxContainer>
          <StyleText tag="p" color="gray" fontSize="xs">The best cooks and the best delivery people at your service. Tasty, Hot food will reach you in 60 minutes</StyleText>
        </FlexBoxContainer>

        <FlexBoxContainer className="linksSocials">
          <StyleButton buttonStyle="solidLight" buttonSize="sm" title="Facebook">
            <BiLogoFacebook />
          </StyleButton>

          <StyleButton buttonStyle="solidLight" buttonSize="sm" title="Twitter/X">
            <RiTwitterXLine />
          </StyleButton>

          <StyleButton buttonStyle="solidLight" buttonSize="sm" title="Linkedin">
            <BiLogoLinkedin />
          </StyleButton>
        </FlexBoxContainer>
      </FlexBoxContainer>

      <FlexBoxContainer className="otherLink">
        <FlexBoxContainer className="logo">
          <FlexBoxContainer>
            <StyleText tag="h2" fontSize="xs" color="light">Company</StyleText>
          </FlexBoxContainer>

          <FlexBoxContainer className="links">
            <StyleLink href="/" linkStyle="gray">Career</StyleLink>
            <StyleLink href="/" linkStyle="gray">About Us</StyleLink>
            <StyleLink href="/" linkStyle="gray">Blog</StyleLink>
            <StyleLink href="/" linkStyle="gray">Press Info</StyleLink>
            <StyleLink href="/" linkStyle="gray">Features</StyleLink>
          </FlexBoxContainer>
        </FlexBoxContainer>

        <FlexBoxContainer className="logo">
          <FlexBoxContainer>
            <StyleText tag="h2" fontSize="xs" color="light">Flavor</StyleText>
          </FlexBoxContainer>

          <FlexBoxContainer className="links">
            <StyleLink href="/" linkStyle="gray">Why Flavor</StyleLink>
            <StyleLink href="/" linkStyle="gray">How it Works</StyleLink>
            <StyleLink href="/" linkStyle="gray">Wht Choose Us</StyleLink>
            <StyleLink href="/" linkStyle="gray">Clint Stories</StyleLink>
            <StyleLink href="/" linkStyle="gray">Gallery</StyleLink>
          </FlexBoxContainer>
        </FlexBoxContainer>

        <FlexBoxContainer className="logo">
          <FlexBoxContainer>
            <StyleText tag="h2" fontSize="xs" color="light">Menu</StyleText>
          </FlexBoxContainer>

          <FlexBoxContainer className="links">
            <StyleLink href="/" linkStyle="gray">Breakfast</StyleLink>
            <StyleLink href="/" linkStyle="gray">Lunch</StyleLink>
            <StyleLink href="/" linkStyle="gray">Dinner</StyleLink>
            <StyleLink href="/" linkStyle="gray">Fast Foods</StyleLink>
            <StyleLink href="/" linkStyle="gray">Drinks</StyleLink>
          </FlexBoxContainer>
        </FlexBoxContainer>
      </FlexBoxContainer>
    </StyleFooterLinks>
  )
}