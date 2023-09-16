import { FlexBoxContainer } from "../FlexBoxContainer/FlexBoxContainer";
import { MdOutlineArrowForwardIos, MdStar } from "react-icons/md"
import { StyleText } from "../Text/StyleText";
import { StyleButton } from "../Button/StyleButton";
import { StylePizzaSpecialOffer } from "./StylePizzaSpecialOffer";
import { StyleBadge } from "../Badge/Badge";
import Image from "next/image";

export default function PizzaSpecialOffer() {
  return (
    <StylePizzaSpecialOffer className="pizzaSpecialOffer">
      <FlexBoxContainer className="img">
        <Image src="/img/imgPizza.png" alt="Pizza Image" width={450} height={500} layout="responsive" />

        <FlexBoxContainer className="cardAssessment">
          <Image src="/img/avatar-01.jpg" alt="" width={60} height={60} layout="responsive" />

          <FlexBoxContainer className="assessment">
            <StyleText tag="h3" fontSize="xs" color="dark">Sarah Taylor</StyleText>
            <StyleText tag="p" fontSize="xxs" color="gray">Healthy and delicious pizza</StyleText>    
            
            <FlexBoxContainer className="starIcon">
              <MdStar fill="#FDC55E" size="15"/>
              <MdStar fill="#FDC55E" size="15"/>
              <MdStar fill="#FDC55E" size="15"/>
              <MdStar fill="#FDC55E" size="15"/>
              <MdStar fill="#FDC55E" size="15"/>
            </FlexBoxContainer>
          </FlexBoxContainer>
        </FlexBoxContainer>
      </FlexBoxContainer>

      <FlexBoxContainer className="content">
        <FlexBoxContainer className="title">
          <StyleBadge badgeStyle="yellow">-50%</StyleBadge>
          <StyleText tag="h2" fontSize="md" color="dark">Pizza Special Offer</StyleText>
        </FlexBoxContainer>

        <StyleText tag="p" fontSize="xs" color="gray">Best cooks and best delivery guys all at your service. Hot tasty food will reach you in 60 minutes.</StyleText>
        <StyleButton buttonStyle="solid" buttonSize="lg">
          See All Menu
          <MdOutlineArrowForwardIos />
        </StyleButton>
      </FlexBoxContainer>
    </StylePizzaSpecialOffer>
  )
}
