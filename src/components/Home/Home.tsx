import Image from 'next/image';
import { StyleHome } from './StyleHome';
import { GiHamburger } from '@/icons';
import { Box, Badge, StyleTypography } from '@/components';

export function Home() {
  return (
    <StyleHome id="home" className="home">
      <Box className="content">
        <div>
          <Badge variant="pinkLight">
            Quality food <GiHamburger />
          </Badge>
          <StyleTypography tag="h1" color="dark" size="lg">
            Faster <Badge variant="transparent"> Delivery </Badge> & Easy{' '}
            <Badge variant="transparent"> Pickup </Badge>
          </StyleTypography>
        </div>

        <StyleTypography tag="p" color="gray" size="xs">
          The best cooks and the best delivery people at your service. Tasty,
          Hot food will reach you in 60 minutes
        </StyleTypography>
      </Box>

      <Box className="img">
        <Image
          src="/img/imgHome.png"
          alt=""
          width={450}
          height={500}
          layout="responsive"
        />
      </Box>
    </StyleHome>
  );
}
