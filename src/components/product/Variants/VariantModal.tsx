import { ComponentWithChildren, Variant as VariantType, WithID } from "@/types";
import Image from "next/image";

import Modal from "@/theme/Modal";
import getPrice from "@/utils/getPrice";

import { useRouter, usePathname, useSearchParams } from "next/navigation";

type Props = {
  isOpen: boolean;
  currentVariant?: WithID<VariantType>;
  setIsOpen: (arg: boolean) => void;
  productID: string;
};

export default function VariantModal({
  isOpen,
  currentVariant,
  setIsOpen,
}: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  if (!currentVariant) {
    return null;
  }

  const selectHandle = () => {
    setIsOpen(false);
    const params = new URLSearchParams(searchParams.toString());
    params.set("var", currentVariant.id);

    router.push(`${pathname}?${params.toString()}`);
  };

  const newPrice = getPrice(currentVariant);

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} size="auto">
      <Wrapper>
        <ImageWrapper>
          <Image
            src={currentVariant.image.src}
            alt={currentVariant.image.alt}
            className="object-cover object-center"
            fill
            sizes=""
          />
        </ImageWrapper>
        <Content>
          {currentVariant.promotion && (
            <Promotion>{currentVariant.promotion.description}</Promotion>
          )}
          <Name>{currentVariant.name}</Name>
          {newPrice === currentVariant.price && (
            <Price>${newPrice.toFixed(2).toLocaleString()}</Price>
          )}
          {newPrice !== currentVariant.price && (
            <Price>
              <span className="font-normal text-black line-through">
                ${currentVariant.price.toFixed(2).toLocaleString()}
              </span>{" "}
              ${newPrice.toFixed(2).toLocaleString()}
            </Price>
          )}
        </Content>
        <Footer>
          <Button type="select" onClick={selectHandle}>
            SELECT
          </Button>
          <Button type="cancel" onClick={() => setIsOpen(false)}>
            CANCEL
          </Button>
        </Footer>
      </Wrapper>
    </Modal>
  );
}

/***********************
 * Styles
 */
const Wrapper: ComponentWithChildren = ({ children }) => {
  return (
    <div className="flex flex-col w-full max-w-[400px] min-w-[300px] gap-8 p-5 mx-auto border-2 border-black rounded-lg bg-white relative">
      {children}
    </div>
  );
};

const ImageWrapper: ComponentWithChildren = ({ children }) => {
  return (
    <div className="relative h-[350px] rounded-xl shadow-sm shadow-black overflow-hidden">
      {children}
    </div>
  );
};

const Content: ComponentWithChildren = ({ children }) => {
  return (
    <div className="flex justify-between w-11/12 gap-2 mx-auto text-2xl font-bold">
      {children}
    </div>
  );
};

const Promotion: ComponentWithChildren = ({ children }) => (
  <div className="absolute top-0 right-0 z-10 px-2 py-1 font-bold text-white bg-red-600 rounded-bl-lg">
    {children}
  </div>
);

const Name: ComponentWithChildren = ({ children }) => {
  return <div>{children}</div>;
};

const Price: ComponentWithChildren = ({ children }) => {
  return <div className="text-red-600">{children}</div>;
};

const Footer: ComponentWithChildren = ({ children }) => {
  return <div className="flex justify-center gap-4">{children}</div>;
};

/*************************
 * Components
 */
type ButtonProps = {
  children: React.ReactNode;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type: "select" | "cancel";
};

const Button = ({ children, onClick, type }: ButtonProps) => {
  const classNames = {
    select:
      "border-2 border-gray-700 text-gray-700 hover:bg-gray-500 hover:text-white hover:border-black",
    cancel:
      "border-2 border-gray-700 text-red-700 bg-white hover:bg-red-300 hover:text-black hover:border-black",
  };

  return (
    <button
      className={"block px-5 py-2 font-bold " + classNames[type]}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
