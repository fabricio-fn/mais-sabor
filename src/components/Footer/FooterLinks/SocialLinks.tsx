import { Box, ButtonLink } from '@/components';
import { BiLogoFacebook, RiTwitterXLine, BiLogoLinkedin } from '@/icons';

export default function SocialLinks() {
  return (
    <Box className="linksSocials">
      <ButtonLink href="/" variant="solidLight" size="sm" title="Facebook">
        <BiLogoFacebook />
      </ButtonLink>

      <ButtonLink href="/" variant="solidLight" size="sm" title="Twitter/X">
        <RiTwitterXLine />
      </ButtonLink>

      <ButtonLink href="/" variant="solidLight" size="sm" title="Linkedin">
        <BiLogoLinkedin />
      </ButtonLink>
    </Box>
  );
}
