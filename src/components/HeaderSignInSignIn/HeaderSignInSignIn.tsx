"use client"

import { StyleBadge } from "../Badge/Badge"
import { StyleLink } from "../Link/StyleLink"
import { StyleText } from "../Text/StyleText"
import { StyleHeaderSignInSignIn } from "./StyleHeaderSignInSignIn"

export default function HeaderSignInSignIn() {

  return (
    <StyleHeaderSignInSignIn>
      <StyleLink href="/" linkStyle="standard">
        <StyleText tag="h2" fontSize="sm" color="dark">
          <StyleBadge badgeStyle="transparent">+</StyleBadge>Flavor
        </StyleText>
      </StyleLink>
    </StyleHeaderSignInSignIn>
  )
}