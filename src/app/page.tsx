import { Button } from "@/theme/basics";
import Image from "next/image";

import { FullPageContainer, ImageWrapper } from "@/theme/containers";

import { Slogan } from "@/theme/typography";
import { Name, Box, Buttons, Content } from "@/theme/sections/home";

export default function Home() {
  return (
    <FullPageContainer>
      <ImageWrapper>
        <Image
          src="/images/hero.jpg"
          alt="Hero Image"
          width={500}
          height={500}
        />
      </ImageWrapper>
      <Content>
        <Box>
          <Name>Nail Essential</Name>
          <Slogan>Transform your look with our nail essentials</Slogan>
        </Box>
        <Buttons>
          <Button>Shop Now</Button>
          <Button>Search</Button>
        </Buttons>
      </Content>
    </FullPageContainer>
  );
}
