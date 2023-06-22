import { ComponentWithChildren } from "@/types";

const FormErrorMessage: ComponentWithChildren = ({ children }) => (
  <div className="mt-2.5 text-red-600 text-sm italic font-semibold">
    {children}
  </div>
);

export default FormErrorMessage;
