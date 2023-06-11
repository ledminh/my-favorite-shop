"use client";

import { ComponentWithChildren } from "@/types";
import { Button } from "@/theme/basics";
import QuantityControl from "./QuantityControl";

export default function Footer() {
  return (
    <Wrapper>
      <Item>
        <Button size="md">Add to cart</Button>
      </Item>
      <Item>
        <QuantityControl />
      </Item>
    </Wrapper>
  );
}

const Wrapper: ComponentWithChildren = ({ children }) => {
  return (
    <div className="flex items-center justify-center gap-4 p-2 bg-blue-950/90">
      {children}
    </div>
  );
};

const Item: ComponentWithChildren = ({ children }) => {
  return (
    <div className="flex items-center justify-center basis-1/2">{children}</div>
  );
};
