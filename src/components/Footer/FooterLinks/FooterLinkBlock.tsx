import { Box, StyleLink, StyleTypography } from '@/components';

interface iFooterLinkBlock {
  title: string;
  links: { href: string; label: string }[];
}

export default function FooterLinkBlock({ title, links }: iFooterLinkBlock) {
  return (
    <Box className="logo">
      <Box>
        <StyleTypography tag="h2" size="xs" color="light">
          {title}
        </StyleTypography>
      </Box>

      <Box className="links">
        {links.map((link) => (
          <StyleLink key={link.href} href={link.href} variant="gray">
            {link.label}
          </StyleLink>
        ))}
      </Box>
    </Box>
  );
}
