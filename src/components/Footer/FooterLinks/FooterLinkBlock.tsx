import { FlexBoxContainer } from "@/components/FlexBoxContainer/FlexBoxContainer";
import { StyleLink } from "@/components/Link/StyleLink";
import { StyleText } from "@/components/Text/StyleText";

interface iFooterLinkBlock {
  title: string
  links: { href: string; label: string }[]
}

export default function FooterLinkBlock({ title, links }: iFooterLinkBlock) {
  return (
    <FlexBoxContainer className="logo">
      <FlexBoxContainer>
        <StyleText tag="h2" fontSize="xs" color="light">
          {title}
        </StyleText>
      </FlexBoxContainer>
      
      <FlexBoxContainer className="links">
        {links.map((link) => (
          <StyleLink key={link.href} href={link.href} linkStyle="gray">
            {link.label}
          </StyleLink>
        ))}
      </FlexBoxContainer>
    </FlexBoxContainer>
  )
}