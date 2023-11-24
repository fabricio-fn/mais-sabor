import { StyleOurMenu } from './StyleOurMenu';
import { Box, StyleTypography } from '@/components';
import { StyleCardsMenu } from './CardsMenu/StyleCardsMenu';
import ListMenuItem from './ListMenuItem/ListMenuItem';

export function OurMenu() {
  return (
    <StyleOurMenu>
      <Box className="content">
        <Box className="title">
          <StyleTypography tag="h3" size="xs" color="black">
            Our Menu
          </StyleTypography>
          <StyleTypography tag="h2" size="md" color="dark">
            Our Popular Dishes
          </StyleTypography>
        </Box>

        <Box className="description">
          <StyleTypography tag="p" size="xs" color="gray">
            Best cooks and best delivery guys all at your service. Hot tasty
            food will reach you in 60 minutes.
          </StyleTypography>
        </Box>
      </Box>

      <StyleCardsMenu>
        <ListMenuItem />
      </StyleCardsMenu>
    </StyleOurMenu>
  );
}
