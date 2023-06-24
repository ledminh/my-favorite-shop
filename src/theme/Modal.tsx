import { Dialog } from "@headlessui/react";
import { CloseIcon } from "@/theme/Icons";

type Props = {
  isOpen: boolean;
  setIsOpen: (arg: boolean) => void;
  children: React.ReactNode;
};

export default function Modal({ isOpen, setIsOpen, children }: Props) {
  return (
    <Dialog
      className="absolute z-50 flex items-center justify-center w-full h-full bg-white"
      open={isOpen}
      onClose={() => setIsOpen(false)}
    >
      <CloseButton />
      <Dialog.Panel
        as="div"
        className="container flex justify-center items-start py-4 overflow-hidden border-y-8 border-red-950 border-double overflow-y-auto w-full h-[calc(80vh-80px)] mt-[30px]"
      >
        {children}
      </Dialog.Panel>
    </Dialog>
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
