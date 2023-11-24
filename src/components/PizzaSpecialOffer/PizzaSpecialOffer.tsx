import { StyleTypography, Box, Button, Badge } from '@/components';
import { MdOutlineArrowForwardIos, MdStar } from '@/icons';
import { StylePizzaSpecialOffer } from './StylePizzaSpecialOffer';
import Image from 'next/image';

export function PizzaSpecialOffer() {
  return (
    <StylePizzaSpecialOffer className="pizzaSpecialOffer">
      <Box className="img">
        <Image
          src="/img/imgPizza.png"
          alt="Pizza Image"
          width={450}
          height={500}
          layout="responsive"
        />

        <Box className="cardAssessment">
          <Image
            src="/img/avatar-01.jpg"
            alt=""
            width={60}
            height={60}
            layout="responsive"
          />

          <Box className="assessment">
            <StyleTypography tag="h3" size="xs" color="dark">
              Sarah Taylor
            </StyleTypography>
            <StyleTypography tag="p" size="xxs" color="gray">
              Healthy and delicious pizza
            </StyleTypography>

            <Box className="starIcon">
              <MdStar fill="#FDC55E" size="15" />
              <MdStar fill="#FDC55E" size="15" />
              <MdStar fill="#FDC55E" size="15" />
              <MdStar fill="#FDC55E" size="15" />
              <MdStar fill="#FDC55E" size="15" />
            </Box>
          </Box>
        </Box>
      </Box>

      <Box className="content">
        <Box className="title">
          <Badge variant="yellow">-50%</Badge>
          <StyleTypography tag="h2" size="md" color="dark">
            Pizza Special Offer
          </StyleTypography>
        </Box>

        <StyleTypography tag="p" size="xs" color="gray">
          Best cooks and best delivery guys all at your service. Hot tasty food
          will reach you in 60 minutes.
        </StyleTypography>
        <Button variant="solid" size="lg">
          See All Menu
          <MdOutlineArrowForwardIos />
        </Button>
      </Box>
    </StylePizzaSpecialOffer>
  );
}
