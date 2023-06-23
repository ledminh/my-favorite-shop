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
      <Item>
        <Button>MORE ...</Button>
      </Item>
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
  return (
    <li className="border border-dashed border-gray-600 rounded-md hover:bg-gray-100 transition duration-150 ease-in-out">
      {children}
    </li>
  );
};

type ButtonProps = {
  children: React.ReactNode;
  props?: any;
};

const Button = ({ children, props }: ButtonProps) => {
  return (
    <button
      className="flex flex-col items-center justify-center p-2 cursor-pointer h-full"
      {...props}
    >
      {children}
    </button>
  );
};
