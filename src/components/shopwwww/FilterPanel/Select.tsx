import { SelectProps } from "./types";

const Select = ({
  id,
  name,
  defaultValue,
  onChange,
  children,
}: SelectProps) => {
  return (
    <select
      id={id}
      name={name}
      defaultValue={defaultValue}
      className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-blue-600 sm:text-sm sm:leading-6"
      onChange={onChange}
    >
      {children}
    </select>
  );
};

export default Select;
