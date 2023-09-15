"use client"

import Image from "next/image";
import { StyleBadge } from "../Badge/Badge";
import { StyleText } from "../Text/StyleText";
import { StyleHome } from "./StyleHome";
import { GiHamburger } from "react-icons/gi"
import { FlexBoxContainer } from "../FlexBoxContainer/FlexBoxContainer";

export default function Home() {

  return (
    <StyleHome id="home" className="home">
      <FlexBoxContainer className="content">
        <div>
          <StyleBadge badgeStyle="pinkLight">Quality food <GiHamburger /></StyleBadge>
          <StyleText tag="h1" color="dark" fontSize="lg">Faster <StyleBadge badgeStyle="transparent"> Delivery </StyleBadge> & Easy <StyleBadge badgeStyle="transparent"> Pickup </StyleBadge></StyleText>
        </div>

        <StyleText tag="p" color="gray" fontSize="xs">The best cooks and the best delivery people at your service. Tasty, Hot food will reach you in 60 minutes</StyleText>
      </FlexBoxContainer>

      <FlexBoxContainer className="img">
        <Image src="/img/imgHome.png" alt="" width={450} height={500} layout="responsive" />
      </FlexBoxContainer>
    </StyleHome>
  )
}