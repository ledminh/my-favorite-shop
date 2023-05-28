import { Button } from "@/theme/basics";

import Image from "next/image";
import homepageBackground from "@/assets/images/homepage_background.jpg";

import { FullPageContainer } from "@/theme/containers";

import { H2 } from "@/theme/typography";
import {
  Name,
  Box,
  Content,
  BackgroundImage,
  Slogan,
} from "@/theme/sections/home";

import Buttons from "@/components/home/Buttons";

export default function Home() {
  return (
    <FullPageContainer>
      <BackgroundImage>
        <Image
          src={homepageBackground}
          alt="Hero Image"
          fill
          style={{
            objectFit: "cover",
          }}
        />
      </BackgroundImage>
      <Content>
        <Box>
          <Name>Nail Essential</Name>
          <Slogan>
            <H2>Transform your look with our nail essentials</H2>
          </Slogan>
        </Box>
        <Buttons />
      </Content>
    </FullPageContainer>
  );
}
