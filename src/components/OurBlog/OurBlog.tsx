import { FlexBoxContainer } from "../FlexBoxContainer/FlexBoxContainer";
import { StyleText } from "../Text/StyleText";
import { StyleOurBlog } from "./StyleOurBlog";
import { StyleCardsMenu } from "../OurMenu/CardsMenu/StyleCardsMenu";
import ListBlogItem from "./ListBlogItem/ListBlogItem";
import { StyleLink } from "../Link/StyleLink";

export default function OurBlog() {
  return (
    <StyleOurBlog>
      <FlexBoxContainer className="title">
        <FlexBoxContainer>
          <StyleText tag="h3" color="black" fontSize="xs">Our Blog</StyleText>
          <StyleText tag="h2" color="dark" fontSize="md">Read Our Blog</StyleText>
        </FlexBoxContainer>

        <StyleText tag="p" color="gray" fontSize="xs">Best cooks and delivery guys all at your sevices. Hot tasty food will reach you in 60 minutes.</StyleText>
      </FlexBoxContainer>

      <FlexBoxContainer className="posts">
        <StyleCardsMenu>
          <ListBlogItem />
        </StyleCardsMenu>
      </FlexBoxContainer>

      <StyleLink href ="/" linkStyle="underline">Read All Blog</StyleLink>
    </StyleOurBlog>
  )
}