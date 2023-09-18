import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { testimonialsData } from "./testimonialsData";
import { settings } from "./settings";
import { BiSolidQuoteRight } from "react-icons/bi";
import { StyleTestimonials } from "./StyleTestimonials";
import { StyleText } from "../Text/StyleText";
import { FlexBoxContainer } from "../FlexBoxContainer/FlexBoxContainer";
import Image from "next/image";

export default function Testimonials() {
	return (
		<StyleTestimonials>
			<FlexBoxContainer className="title">
				<StyleText tag="h3" color="black" fontSize="xs">Testinoial</StyleText>
				<StyleText tag="h2" color="dark" fontSize="md">What Our Clients Say</StyleText>
			</FlexBoxContainer>

			<Slider {...settings}>
				{testimonialsData.map((testimonial, index) => (
					<FlexBoxContainer className="item" key={index}>
						<FlexBoxContainer className="content">
							<BiSolidQuoteRight fill="#FDC55E" size={60} />
							<StyleText tag="p" color="gray" fontSize="xs">{testimonial.comment}</StyleText>
						</FlexBoxContainer>

						<FlexBoxContainer className="user">
							<Image src={testimonial.image} alt="" width={100} height={100} />
							<StyleText tag="h3" color="dark" fontSize="xs">{testimonial.name}</StyleText>
						</FlexBoxContainer>
					</FlexBoxContainer>
				))}
			</Slider>
		</StyleTestimonials>
	)
}