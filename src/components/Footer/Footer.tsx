import FooterLinks from './FooterLinks/FooterLinks';
import { StyleFooter } from './StyleFooter';
import { Box, StyleLink, StyleTypography } from '@/components';

export function Footer() {
  return (
    <>
      <FooterLinks />

      <StyleFooter>
        <StyleTypography tag="p" size="xxs" color="light">
          Copyright © 2023 - All Right Reserved
        </StyleTypography>

        <Box>
          <StyleLink href="/" variant="light">
            Terms
          </StyleLink>
          <StyleLink href="/" variant="light">
            Privacy
          </StyleLink>
          <StyleLink href="/" variant="light">
            Security
          </StyleLink>
        </Box>
      </StyleFooter>
    </>
  );
}
