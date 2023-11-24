import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { testimonialsData } from './testimonialsData';
import { settings } from './settings';
import { BiSolidQuoteRight } from '@/icons';
import { StyleTestimonials } from './StyleTestimonials';
import Image from 'next/image';
import { Box, StyleTypography } from '@/components';

export function Testimonials() {
  return (
    <StyleTestimonials>
      <Box className="title">
        <StyleTypography tag="h3" color="black" size="xs">
          Testinoial
        </StyleTypography>
        <StyleTypography tag="h2" color="dark" size="md">
          What Our Clients Say
        </StyleTypography>
      </Box>

      <Slider {...settings}>
        {testimonialsData.map((testimonial, index) => (
          <Box className="item" key={index}>
            <Box className="content">
              <BiSolidQuoteRight fill="#FDC55E" size={60} />
              <StyleTypography tag="p" color="gray" size="xs">
                {testimonial.comment}
              </StyleTypography>
            </Box>

            <Box className="user">
              <Image src={testimonial.image} alt="" width={100} height={100} />
              <StyleTypography tag="h3" color="dark" size="xs">
                {testimonial.name}
              </StyleTypography>
            </Box>
          </Box>
        ))}
      </Slider>
    </StyleTestimonials>
  );
}
