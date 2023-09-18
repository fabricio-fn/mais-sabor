import { StyleOurMenu } from "./StyleOurMenu";
import { FlexBoxContainer } from "../FlexBoxContainer/FlexBoxContainer";
import { StyleText } from "../Text/StyleText";
import { StyleCardsMenu } from "./CardsMenu/StyleCardsMenu";
import ListMenuItem from "./ListMenuItem/ListMenuItem";

export default function OurMenu() {
  return (
    <StyleOurMenu>
      <FlexBoxContainer className="content">
        <FlexBoxContainer className="title">
          <StyleText tag="h3" fontSize="xs" color="black">Our Menu</StyleText>
          <StyleText tag="h2" fontSize="md" color="dark">Our Popular Dishes</StyleText>
        </FlexBoxContainer>

        <FlexBoxContainer className="description">
          <StyleText tag="p" fontSize="xs" color="gray">
            Best cooks and best delivery guys all at your service. Hot tasty food will reach you in 60 minutes.
          </StyleText>
        </FlexBoxContainer>
      </FlexBoxContainer>

      <StyleCardsMenu>
        <ListMenuItem />
      </StyleCardsMenu>
    </StyleOurMenu>
  )
}
