import { StyleBadge } from "../../Badge/Badge";
import { StyleButton } from "../../Button/StyleButton";
import { FlexBoxContainer } from "../../FlexBoxContainer/FlexBoxContainer";
import { StyleText } from "../../Text/StyleText";
import { StyleListMenuItem } from "./StyleListMenuItem";
import { BsBagCheck } from "react-icons/bs"
import { AiOutlineHeart } from "react-icons/ai"
import Image from "next/image";

export default function ListMenuItem() {
  const menuItems = [
    {
      name: "Rice Bowl",
      description: "Delicious rice bowl",
      price: "$13",
      badgeStyle: "green",
      buttonStyle: "solidYellow",
    },

    {
      name: "Rice Bowl",
      description: "Delicious rice bowl",
      price: "$13",
      badgeStyle: "green",
      buttonStyle: "solidYellow",
    },

    {
      name: "Rice Bowl",
      description: "Delicious rice bowl",
      price: "$13",
      badgeStyle: "green",
      buttonStyle: "solidYellow",
    },

  ]

  return (
    <>
      {menuItems.map((item, index) => (
        <StyleListMenuItem key={index}>
          <FlexBoxContainer className="itemMenu">
            <FlexBoxContainer className="headerCard">
              <StyleBadge badgeStyle="green">New</StyleBadge>

              <StyleButton buttonStyle="solidYellow" buttonSize="sm" title="Adicionar a os favoritos">
                <AiOutlineHeart size="25" />
              </StyleButton>
            </FlexBoxContainer>

            <FlexBoxContainer className="imgCard">
              <Image src="/img/imgPizza.png" alt="Imagem do Prato/Lanche" width={200} height={200} />
            </FlexBoxContainer>

            <FlexBoxContainer className="footerCard">
              <FlexBoxContainer className="content">
                <StyleText tag="h2" fontSize="sm" color="dark">Rice Bowl</StyleText>
                <StyleText tag="p" fontSize="xs" color="gray">Delicious rice bowl</StyleText>
                <StyleText tag="h3" fontSize="sm" color="red">$13</StyleText>
              </FlexBoxContainer>

              <StyleButton buttonStyle="solid" buttonSize="sm" title="Prosseguir para a compra">
                <BsBagCheck size="25" />
              </StyleButton>
            </FlexBoxContainer>
          </FlexBoxContainer>
        </StyleListMenuItem>
      ))}
    </>
  )
}