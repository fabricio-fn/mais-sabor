import { BiLogoPlayStore, FaAppStoreIos } from '@/icons';
import { Button, StyleTypography, Box } from '@/components';
import { StyleOurMobileApp } from './StyleOurMobileApp';
import Image from 'next/image';

export function OurMobileApp() {
  return (
    <StyleOurMobileApp>
      <Box className="img">
        <Image
          src="/img/mockupMobileApp.png"
          alt="Imagem do nosso aplicativo"
          width={300}
          height={600}
          layout="responsive"
        />
      </Box>

      <Box className="content">
        <Box className="title">
          <Box>
            <StyleTypography tag="h3" size="xs" color="black">
              Download App
            </StyleTypography>

            <StyleTypography tag="h2" size="md" color="dark">
              Our Mobile App
            </StyleTypography>
          </Box>
        </Box>

        <StyleTypography tag="p" size="xs" color="gray">
          Best cooks and the best delivery guys all at your service. Hot tasty
          food will reach you in 60 minutes.
        </StyleTypography>

        <Box className="buttons">
          <Button variant="outlineLight" size="lg">
            <FaAppStoreIos size={30} />
            App Store
          </Button>

          <Button variant="outlineLight" size="lg">
            <BiLogoPlayStore size={30} />
            Play Store
          </Button>
        </Box>
      </Box>
    </StyleOurMobileApp>
  );
}
