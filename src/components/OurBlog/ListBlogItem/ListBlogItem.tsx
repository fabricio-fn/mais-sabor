import { FlexBoxContainer } from "@/components/FlexBoxContainer/FlexBoxContainer";
import { StyleListBlogItem } from "./StyleListBlogItem";
import Image from "next/image";
import { StyleLink } from "@/components/Link/StyleLink";
import { StyleText } from "@/components/Text/StyleText";
import { HiOutlineArrowRight } from "react-icons/hi"

export default function ListBlogItem() {
  return (
    <StyleListBlogItem>
      <FlexBoxContainer className="cardsPosts">
        <FlexBoxContainer className="img">
          <Image src="/img/imgBlog.jpg" alt="" width={400} height={400} />
        </FlexBoxContainer>

        <FlexBoxContainer className="content">
          <StyleText tag="h2" color="dark" fontSize="xs">Faster home delivery</StyleText>
          <StyleText tag="p" color="gray" fontSize="xs">We are giving our cusomers the home delivery services..</StyleText>

          <StyleLink linkStyle="dark" href="/">
            Learn More 
            <HiOutlineArrowRight size={25} />
          </StyleLink>
        </FlexBoxContainer>
      </FlexBoxContainer>
    </StyleListBlogItem>
  )
}