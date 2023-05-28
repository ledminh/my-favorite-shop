"use client";
import {
  Controls,
  ButtonWrapper,
  InputWrapper,
  CloseWrapper,
  CloseButton,
} from "@/theme/sections/home";
import { Button, Input } from "@/theme/basics";

import { useState } from "react";

export default function () {
  const [isSearch, setIsSearch] = useState(false);

  return isSearch ? (
    <Controls>
      <InputWrapper>
        <Input placeholder="Search ..." />
      </InputWrapper>
      <CloseWrapper>
        <CloseButton onClick={() => setIsSearch(false)} />
      </CloseWrapper>
    </Controls>
  ) : (
    <Controls>
      <ButtonWrapper>
        <Button type="link" href="/shop" color="attention">
          Shop Now
        </Button>
      </ButtonWrapper>
      <ButtonWrapper>
        <Button onClick={() => setIsSearch(true)}>Search</Button>
      </ButtonWrapper>
    </Controls>
  );
}
