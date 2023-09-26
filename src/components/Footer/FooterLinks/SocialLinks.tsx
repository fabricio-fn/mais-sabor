import { FlexBoxContainer } from "@/components/FlexBoxContainer/FlexBoxContainer";
import { StyleButtonLink } from "@/components/ButtonLink/StyleButtonLink";
import { BiLogoFacebook, BiLogoLinkedin } from "react-icons/bi";
import { RiTwitterXLine } from "react-icons/ri";

export default function SocialLinks() {
  return (
    <FlexBoxContainer className="linksSocials">
      <StyleButtonLink href="/" buttonLinkStyle="solidLight" buttonLinkSize="sm" title="Facebook">
        <BiLogoFacebook />
      </StyleButtonLink>

      <StyleButtonLink href="/" buttonLinkStyle="solidLight" buttonLinkSize="sm" title="Twitter/X">
        <RiTwitterXLine />
      </StyleButtonLink>
      
      <StyleButtonLink href="/" buttonLinkStyle="solidLight" buttonLinkSize="sm" title="Linkedin">
        <BiLogoLinkedin />
      </StyleButtonLink>
    </FlexBoxContainer>
  )
}