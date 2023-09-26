import { StyleFooterLinks } from "./StyleFooterLinks";
import { StyleBadge } from "@/components/Badge/Badge";
import { FlexBoxContainer } from "@/components/FlexBoxContainer/FlexBoxContainer";
import { StyleText } from "@/components/Text/StyleText";
import SocialLinks from "./SocialLinks";
import FooterLinkBlock from "./FooterLinkBlock";

export default function FooterLinks() {
  const companyLinks = [
    { href: "/", label: "Career" },
    { href: "/", label: "About Us" },
    { href: "/", label: "Blog" },
    { href: "/", label: "Press Info" },
    { href: "/", label: "Features" },
  ]

  const flavorLinks = [
    { href: "/", label: "Why Flavor" },
    { href: "/", label: "How it Works" },
    { href: "/", label: "Why Choose Us" },
    { href: "/", label: "Client Stories" },
    { href: "/", label: "Gallery" },
  ]

  const menuLinks = [
    { href: "/", label: "Breakfast" },
    { href: "/", label: "Lunch" },
    { href: "/", label: "Dinner" },
    { href: "/", label: "Fast Foods" },
    { href: "/", label: "Drinks" },
  ]

  return (
    <StyleFooterLinks>
      <FlexBoxContainer className="logo">
        <FlexBoxContainer>
          <StyleText tag="h2" fontSize="sm" color="light">
            <StyleBadge badgeStyle="transparent">+</StyleBadge>Flavor
          </StyleText>
        </FlexBoxContainer>

        <FlexBoxContainer>
          <StyleText tag="p" color="gray" fontSize="xs">
            The best cooks and the best delivery people at your service. Tasty, Hot food will reach you in 60 minutes
          </StyleText>
        </FlexBoxContainer>

        <SocialLinks />
      </FlexBoxContainer>

      <FlexBoxContainer className="otherLinks">
        <FooterLinkBlock title="Company" links={companyLinks} />
        <FooterLinkBlock title="Flavor" links={flavorLinks} />
        <FooterLinkBlock title="Menu" links={menuLinks} />
      </FlexBoxContainer>
    </StyleFooterLinks>
  )
}