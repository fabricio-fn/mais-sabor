import { BiLogoPlayStore } from "react-icons/bi";
import { FaAppStoreIos } from "react-icons/fa";
import { StyleButton } from "../Button/StyleButton";
import { FlexBoxContainer } from "../FlexBoxContainer/FlexBoxContainer";
import { StyleText } from "../Text/StyleText";
import { StyleOurMobileApp } from "./StyleOurMobileApp";
import Image from "next/image";

export default function OurMobileApp() {
  return (
    <StyleOurMobileApp>
      <FlexBoxContainer className="img">
        <Image src="/img/mockupMobileApp.png" alt="Imagem do nosso aplicativo" width={300} height={600} layout="responsive" />
      </FlexBoxContainer>

      <FlexBoxContainer className="content">
        <FlexBoxContainer className="title">
          <FlexBoxContainer>
            <StyleText tag="h3" fontSize="xs" color="black">
              Download App
            </StyleText>

            <StyleText tag="h2" fontSize="md" color="dark">
              Our Mobile App
            </StyleText>
          </FlexBoxContainer>
        </FlexBoxContainer>

        <StyleText tag="p" fontSize="xs" color="gray">
          Best cooks and the best delivery guys all at your service.
          Hot tasty food will reach you in 60 minutes.
        </StyleText>

        <FlexBoxContainer className="buttons">
          <StyleButton buttonStyle="outlineLight" buttonSize="lg">
            <FaAppStoreIos size={30} />
            App Store
          </StyleButton>

          <StyleButton buttonStyle="outlineLight" buttonSize="lg">
            <BiLogoPlayStore size={30} />
            Play Store
          </StyleButton>
        </FlexBoxContainer>
      </FlexBoxContainer>
    </StyleOurMobileApp>
  )
}