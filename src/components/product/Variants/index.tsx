import { ComponentWithChildren } from "@/types";
import { Variant as VariantType } from "@/types";
import Variant from "./Variant";

type Props = {
  productID: string;
  variants: VariantType[];
};

export default function Variants({ productID, variants }: Props) {
  return (
    <Wrapper>
      {variants.map((variant) => (
        <Item key={variant.id}>
          <Variant productID={productID} variant={variant} />
        </Item>
      ))}
    </Wrapper>
  );
}

/***********************
 * Styles
 */
const Wrapper: ComponentWithChildren = ({ children }) => {
  return <ul className="flex justify-center gap-3 ">{children}</ul>;
};

const Item: ComponentWithChildren = ({ children }) => {
  return <li>{children}</li>;
};
