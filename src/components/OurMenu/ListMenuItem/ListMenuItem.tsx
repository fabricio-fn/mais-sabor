import { StyleBadge } from "../../Badge/Badge";
import { StyleButton } from "../../Button/StyleButton";
import { FlexBoxContainer } from "../../FlexBoxContainer/FlexBoxContainer";
import { StyleText } from "../../Text/StyleText";
import { StyleListMenuItem } from "./StyleListMenuItem";
import { BsBagCheck } from "react-icons/bs"
import { AiOutlineHeart } from "react-icons/ai"
import Image from "next/image";
import { menuItems } from "./MenuItemsData";

export default function ListMenuItem() {
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
              <Image src={item.image} alt={item.name} width={180} height={180} />
            </FlexBoxContainer>

            <FlexBoxContainer className="footerCard">
              <FlexBoxContainer className="content">
                <StyleText tag="h2" fontSize="sm" color="dark">{item.name}</StyleText>
                <StyleText tag="p" fontSize="xs" color="gray">{item.description}</StyleText>
                <StyleText tag="h3" fontSize="sm" color="red">{item.price}</StyleText>
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