import { CloseIcon } from "@/theme/Icons";
import { ComponentWithChildren } from "@/theme/types";
import * as Type from "./home.types";

export const BackgroundImage: ComponentWithChildren = ({ children }) => {
  return <div>{children}</div>;
};

export const Content: ComponentWithChildren = ({ children }) => {
  const fullscreen = "absolute w-full h-full min-w-[337px]";
  const flex = "flex flex-col items-center justify-center";
  const bg = "bg-red-200/70";

  return <div className={`${fullscreen} ${flex} ${bg}`}>{children}</div>;
};

export const Box: ComponentWithChildren = ({ children }) => {
  return (
    <div className="p-6 pb-0 border-4 border-white mb-9 rounded-2xl">
      {children}
    </div>
  );
};

export const Name: ComponentWithChildren = ({ children }) => {
  const text = "text-2xl text-white font-semibold";
  const structure = "inline-block p-3";
  const bg = "bg-blue-950";
  const transform = "-translate-y-14";

  return (
    <div className={`${text} ${structure} ${bg} ${transform}`}>{children}</div>
  );
};

export const Slogan: ComponentWithChildren = ({ children }) => {
  return (
    <div className="text-center -translate-y-6 text-blue-950">{children}</div>
  );
};

export const Controls: ComponentWithChildren = ({ children }) => {
  return (
    <div className="flex items-center justify-between w-3/4 md:w-1/3 lg:w-1/4">
      {children}
    </div>
  );
};

export const ButtonWrapper: ComponentWithChildren = ({ children }) => {
  return <div className="basis-[48%]">{children}</div>;
};

export const InputWrapper: ComponentWithChildren = ({ children }) => {
  return <div className="basis-[90%]">{children}</div>;
};

export const CloseWrapper: ComponentWithChildren = ({ children }) => {
  return <div className="flex items-center">{children}</div>;
};

export const CloseButton: Type.CloseButton = ({ onClick }) => {
  return (
    <button
      className="w-[46px] h-[46px] text-blue-950 hover:bg-blue-950/40 hover:text-white active:bg-blue-950/60  rounded-full"
      onClick={onClick}
    >
      <CloseIcon />
    </button>
  );
};
