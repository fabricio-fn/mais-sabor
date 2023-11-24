'use client';

import { StyleHeaderSignInSignUp } from './StyleHeaderSignInSignUp';
import { StyleLink, Badge, StyleTypography } from '@/components';

export function HeaderSignInSignUp() {
  return (
    <StyleHeaderSignInSignUp>
      <StyleLink href="/" variant="standard" target="_self">
        <StyleTypography tag="h2" size="sm" color="dark">
          <Badge variant="transparent">+</Badge>Flavor
        </StyleTypography>
      </StyleLink>
    </StyleHeaderSignInSignUp>
  );
}
