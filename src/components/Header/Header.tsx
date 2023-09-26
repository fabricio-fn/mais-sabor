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
import { StyleButtonLink } from "../ButtonLink/StyleButtonLink";
import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const { showMenu, toggleMenu } = useHeader()
  const [isConnected, setIsConnected] = useState(false)

  return (
    <StyleHeader>
      <StyleText tag="h2" fontSize="sm" color="dark">
        <StyleBadge badgeStyle="transparent">+</StyleBadge>Flavor
      </StyleText>

      <StyleNav className={showMenu ? "active" : ""}>
        <StyleLink linkStyle="normal" href="#home">Home</StyleLink>
        <StyleLink linkStyle="normal" href="">Review</StyleLink>
        <StyleLink linkStyle="normal" href="">About Us</StyleLink>
        <StyleLink linkStyle="normal" href="">Contact Us</StyleLink>
      </StyleNav>

      <StyleButton buttonStyle="solid" buttonSize="sm" className="btnMenu"
        onClick={toggleMenu}>
        {showMenu ? (<MdClose />) : <MdMenu />}
      </StyleButton>

      {isConnected ?
        <FlexBoxContainer className="buttons">
          <StyleButtonLink buttonLinkSize="lg" buttonLinkStyle="outline" href="/signin">
            Sign In
          </StyleButtonLink>

          <StyleButtonLink buttonLinkSize="lg" buttonLinkStyle="solid" href="/signup">
            Sign Up
          </StyleButtonLink>
        </FlexBoxContainer>
        :
        <FlexBoxContainer className="profilePicture">
          <StyleLink linkStyle="standard" href="">
            <Image src="/img/avatar-02.jpg" alt="Profile picture" width={60} height={60} />
          </StyleLink>
        </FlexBoxContainer>
      }
    </StyleHeader>
  )
}