import { StyleListBlogItem } from './StyleListBlogItem';
import Image from 'next/image';
import { StyleTypography, StyleLink, Box } from '@/components';
import { HiOutlineArrowRight } from '@/icons';

export default function ListBlogItem() {
  return (
    <StyleListBlogItem>
      <Box className="cardsPosts">
        <Box className="img">
          <Image src="/img/imgBlog.jpg" alt="" width={400} height={250} />
        </Box>

        <Box className="content">
          <StyleTypography tag="h2" color="dark" size="xs">
            Faster home delivery
          </StyleTypography>
          <StyleTypography tag="p" color="gray" size="xs">
            We are giving our cusomers the home delivery services..
          </StyleTypography>

          <StyleLink variant="dark" href="/">
            Learn More
            <HiOutlineArrowRight size={25} />
          </StyleLink>
        </Box>
      </Box>
    </StyleListBlogItem>
  );
}
