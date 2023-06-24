import { ComponentWithChildren, Variant as VariantType } from "@/types";
import Image from "next/image";

import Modal from "@/theme/Modal";
import { Description } from "@headlessui/react/dist/components/description/description";

type Props = {
  isOpen: boolean;
  setIsOpen: (arg: boolean) => void;
  variant: VariantType;
};

export default function VariantModal({ isOpen, setIsOpen, variant }: Props) {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <ImageWrapper>
        <Image
          src={variant.image.src}
          alt={variant.image.alt}
          className="object-cover object-center"
          fill
        />
      </ImageWrapper>
      <Content>
        <Name>{variant.name}</Name>
        <Price>{variant.price}</Price>
      </Content>
      <Footer>
        <Button onClick={() => {}}>SELECT</Button>
      </Footer>
    </Modal>
  );
}

/***********************
 * Styles
 */
const ImageWrapper: ComponentWithChildren = ({ children }) => {
  return <div className="relative">{children}</div>;
};

const Content: ComponentWithChildren = ({ children }) => {
  return <div className="flex flex-col gap-2">{children}</div>;
};

const Name: ComponentWithChildren = ({ children }) => {
  return <h3 className="text-xl font-bold">{children}</h3>;
};

const Price: ComponentWithChildren = ({ children }) => {
  return <p className="text-xl font-bold">{children}</p>;
};

const Footer: ComponentWithChildren = ({ children }) => {
  return <div className="flex justify-center">{children}</div>;
};

/*************************
 * Components
 */
type ButtonProps = {
  children: React.ReactNode;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button
      className="flex flex-col items-center justify-center h-full p-2 cursor-pointer"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
