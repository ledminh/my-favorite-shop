import Link from "next/link";
import { ComponentWithChildren } from "@/types";

type HeaderProps = {
  orderID: string;
};

export default function Header({ orderID }: HeaderProps) {
  return (
    <Wrapper>
      <H1>Payment successful</H1>
      <Emphasized>Thanks for ordering.</Emphasized>
      <P>
        <span>
          We appreciate your order, we’re currently processing it. So hang tight
          and it&apos;ll be shipped very soon! In the meantime, you can check
          your order&apos;s status at
        </span>{" "}
        <Link
          className="border-b border-blue-600 font-semibold font-mono"
          href={`/order/${orderID}`}
        >
          {orderID}
        </Link>
        <span>.</span>
      </P>
      <P>Feel free to contact us with any questions.</P>
    </Wrapper>
  );
}

/*****************************
 * Styles
 */
const Wrapper: ComponentWithChildren = ({ children }) => (
  <div className="flex flex-col gap-3">{children}</div>
);

const H1: ComponentWithChildren = ({ children }) => (
  <h1 className="text-sm font-medium text-blue-600">{children}</h1>
);

const Emphasized: ComponentWithChildren = ({ children }) => (
  <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
    {children}
  </p>
);

const P: ComponentWithChildren = ({ children }) => (
  <p className="mt-2 text-base text-gray-500">{children}</p>
);
