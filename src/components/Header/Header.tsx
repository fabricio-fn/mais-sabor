"use client"

import { StyleHeader } from "./StyleHeader";
import { StyleBadge } from "../Badge/Badge";
import { StyleNav } from "./Nav/StyleNav";
import { StyleLink } from "../Link/StyleLink";
import { StyleButton } from "../Button/StyleButton";
import { MdMenu, MdClose } from "react-icons/md"
import useHeader from "./Hook/useHeader"
import { FlexBoxContainer } from "../FlexBoxContainer/FlexBoxContainer";
import { StyleText } from "../Text/StyleText";

export default function Header() {
  const { showMenu, toggleMenu } = useHeader()

  return (
    <StyleHeader>
      <StyleText tag="h2" fontSize="sm" color="dark">
        <StyleBadge badgeStyle="transparent">+</StyleBadge>Flavor
      </StyleText>

      <StyleNav className={showMenu ? "active" : ""}>
        <StyleLink linkStyle="normal" href="#home">Home</StyleLink>
        <StyleLink linkStyle="normal" href="/">Review</StyleLink>
        <StyleLink linkStyle="normal" href="/">About</StyleLink>
        <StyleLink linkStyle="normal" href="/">Contact</StyleLink>
      </StyleNav>

      <StyleButton buttonStyle="solid" buttonSize="sm" className="btnMenu"
        onClick={toggleMenu}>
        {showMenu ? (<MdClose />) : <MdMenu />}
      </StyleButton>

      <FlexBoxContainer className="signIn_signUp">
        <StyleButton buttonStyle="outline" buttonSize="md">Sign In</StyleButton>
        <StyleButton buttonStyle="solid" buttonSize="md">Sign Up</StyleButton>
      </FlexBoxContainer>
    </StyleHeader>
  )
}
