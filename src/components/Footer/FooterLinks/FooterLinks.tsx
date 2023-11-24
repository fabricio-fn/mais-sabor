import { StyleFooterLinks } from './StyleFooterLinks';
import SocialLinks from './SocialLinks';
import FooterLinkBlock from './FooterLinkBlock';
import { Badge, Box, StyleTypography } from '@/components';
import { dataFooterLinks } from './dataFooterLinks';

export default function FooterLinks() {
  return (
    <StyleFooterLinks>
      <Box className="logo">
        <Box>
          <StyleTypography tag="h2" size="sm" color="light">
            <Badge variant="transparent">+</Badge>Flavor
          </StyleTypography>
        </Box>

        <Box>
          <StyleTypography tag="p" color="gray" size="xs">
            The best cooks and the best delivery people at your service. Tasty,
            Hot food will reach you in 60 minutes
          </StyleTypography>
        </Box>

        <SocialLinks />
      </Box>

      <Box className="otherLinks">
        <FooterLinkBlock title="Company" links={dataFooterLinks.companyLinks} />
        <FooterLinkBlock title="Flavor" links={dataFooterLinks.flavorLinks} />
        <FooterLinkBlock title="Menu" links={dataFooterLinks.menuLinks} />
      </Box>
    </StyleFooterLinks>
  );
}
