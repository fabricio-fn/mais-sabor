"use client"

import { StyleBadge } from "../Badge/Badge"
import { StyleLink } from "../Link/StyleLink"
import { StyleText } from "../Text/StyleText"
import { StyleHeaderSignInSignUp } from "./StyleHeaderSignInSignUp"

export default function HeaderSignInSignIn() {

  return (
    <StyleHeaderSignInSignUp>
      <StyleLink href="/" linkStyle="standard" target="_self">
        <StyleText tag="h2" fontSize="sm" color="dark">
          <StyleBadge badgeStyle="transparent">+</StyleBadge>Flavor
        </StyleText>
      </StyleLink>
    </StyleHeaderSignInSignUp>
  )
}