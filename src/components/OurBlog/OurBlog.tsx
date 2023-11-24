import { Box, StyleTypography, StyleLink } from '@/components';
import { StyleOurBlog } from './StyleOurBlog';
import { StyleCardsMenu } from '../OurMenu/CardsMenu/StyleCardsMenu';
import ListBlogItem from './ListBlogItem/ListBlogItem';

export function OurBlog() {
  return (
    <StyleOurBlog>
      <Box className="title">
        <Box>
          <StyleTypography tag="h3" color="black" size="xs">
            Our Blog
          </StyleTypography>
          <StyleTypography tag="h2" color="dark" size="md">
            Read Our Blog
          </StyleTypography>
        </Box>

        <StyleTypography tag="p" color="gray" size="xs">
          Best cooks and delivery guys all at your sevices. Hot tasty food will
          reach you in 60 minutes.
        </StyleTypography>
      </Box>

      <Box className="posts">
        <StyleCardsMenu>
          <ListBlogItem />
        </StyleCardsMenu>
      </Box>

      <StyleLink href="/" variant="underline">
        Read All Blog
      </StyleLink>
    </StyleOurBlog>
  );
}
