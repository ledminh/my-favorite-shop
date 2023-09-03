type WrapperProps = {
  type: "sm" | "md" | "lg";
  children: React.ReactNode;
};

const WrapperStyle = {
  sm: "sm:hidden w-1/2 mx-auto",
  // md: "hidden sm:grid sm:grid-cols-7 sm:gap-3 text-xs w-11/12 mx-auto lg:hidden",
  md: "hidden sm:flex sm:justify-center sm:gap-3 text-xs w-11/12 mx-auto lg:hidden",
  lg: "hidden lg:grid lg:grid-cols-11 lg:gap-3 text-xs w-11/12 mx-auto",
};

const Wrapper = ({ children, type }: WrapperProps) => {
  return <div className={WrapperStyle[type]}>{children}</div>;
};

export default Wrapper;
