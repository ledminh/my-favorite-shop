"use client";

import type { ComponentWithChildren } from "@/types";
import { CloseIcon } from "@/theme/Icons";

import * as Type from "./types";

import { Button, Input } from "@/theme/basics";

import { useState } from "react";

export default function () {
  const [isSearch, setIsSearch] = useState(false);

  if (isSearch) {
    return (
      <Wrapper>
        <InputWrapper>
          <Input placeholder="Search ..." />
        </InputWrapper>
        <CloseWrapper>
          <CloseButton onClick={() => setIsSearch(false)} />
        </CloseWrapper>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <ButtonWrapper>
        <Button type="link" href="/shop" color="attention">
          Shop Now
        </Button>
      </ButtonWrapper>
      <ButtonWrapper>
        <Button onClick={() => setIsSearch(true)}>Search</Button>
      </ButtonWrapper>
    </Wrapper>
  );
}

/*********************
 * Styles
 */

const Wrapper: ComponentWithChildren = ({ children }) => (
  <div className="flex items-center justify-between w-[90%] p-1 md:w-1/2 lg:w-1/3">
    {children}
  </div>
);

const ButtonWrapper: ComponentWithChildren = ({ children }) => {
  return <div className="basis-[48%]">{children}</div>;
};

const InputWrapper: ComponentWithChildren = ({ children }) => {
  return <div className="basis-[90%] mr-1">{children}</div>;
};

const CloseWrapper: ComponentWithChildren = ({ children }) => {
  return <div className="flex items-center">{children}</div>;
};

const CloseButton: Type.CloseButton = ({ onClick }) => {
  return (
    <button
      className="w-[46px] h-[46px] text-blue-950 hover:bg-blue-950/40 hover:text-white active:bg-blue-950/60 focus:bg-blue-950/60 rounded-full"
      onClick={onClick}
    >
      <CloseIcon />
    </button>
  );
};
