import { LabelProps } from "./types";

const Label = ({ children, htmlFor }: LabelProps) => {
  return (
    <label
      htmlFor={htmlFor}
      className="flex text-sm font-medium leading-6 text-gray-900 sm:basis-2/3"
    >
      {children}
    </label>
  );
};
export default Label;
