import { Dialog } from "@headlessui/react";
import { CloseIcon } from "@/theme/Icons";

type Props = {
  isOpen: boolean;
  setIsOpen: (arg: boolean) => void;
  children: React.ReactNode;
  size: "full" | "auto";
};

export default function Modal({ isOpen, setIsOpen, children, size }: Props) {
  if (size === "full") {
    return (
      <ModalFull isOpen={isOpen} setIsOpen={setIsOpen}>
        {children}
      </ModalFull>
    );
  }

  return (
    <ModalAuto isOpen={isOpen} setIsOpen={setIsOpen}>
      {children}
    </ModalAuto>
  );
}

/**************************
 * Components
 */
const CloseButton = () => {
  return (
    <button className="absolute top-0 right-1 w-[50px] h-[50px] hover:bg-blue-950/40 hover:text-white rounded-full ">
      <CloseIcon />
    </button>
  );
};

type ModalFullProps = {
  isOpen: boolean;
  setIsOpen: (arg: boolean) => void;
  children: React.ReactNode;
};

const ModalFull = ({ isOpen, setIsOpen, children }: ModalFullProps) => {
  return (
    <Dialog
      className="absolute z-50 flex items-center justify-center w-full h-full bg-white"
      open={isOpen}
      onClose={() => setIsOpen(false)}
    >
      <CloseButton />
      <Dialog.Panel
        as="div"
        className="block container py-4 overflow-hidden border-y-8 border-red-950 border-double overflow-y-auto w-full h-[calc(80vh-80px)] mt-[30px]"
      >
        {children}
      </Dialog.Panel>
    </Dialog>
  );
};

type ModalAutoProps = {
  isOpen: boolean;
  setIsOpen: (arg: boolean) => void;
  children: React.ReactNode;
};

const ModalAuto = ({ isOpen, setIsOpen, children }: ModalAutoProps) => {
  return (
    <Dialog
      className="absolute z-50 flex items-center justify-center w-full h-full bg-gradient-radial from-white to-black/80"
      open={isOpen}
      onClose={() => setIsOpen(false)}
    >
      <Dialog.Panel as="div" className="block w-full">
        {children}
      </Dialog.Panel>
    </Dialog>
  );
};
