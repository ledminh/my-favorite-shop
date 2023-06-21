import { H2 } from "@/theme/typography";
import { ComponentWithChildren } from "@/types";
import ContactInfo from "@/components/contact/ContactInfo";
import Form from "@/components/contact/Form";

export default function ContactPage() {
  return (
    <Wrapper>
      <ContentWrapper>
        <BackgroundWrapper>
          <BackgroundSVG />
        </BackgroundWrapper>

        <Title>
          <H2>Get in touch</H2>
        </Title>
        <P>
          We value open communication and would love to hear from you. Please
          don&apos;t hesitate to get in touch with us using any of the following
          contact methods:
        </P>
        <ContactInfo />
      </ContentWrapper>
      <Form />
    </Wrapper>
  );
}

/******************
 * Styles
 */
const Wrapper: ComponentWithChildren = ({ children }) => (
  <div className="relative bg-gray isolate">
    <div className="grid grid-cols-1 lg:grid-cols-2">
      {children}
    </div>
  </div>
);

const ContentWrapper: ComponentWithChildren = ({ children }) => (
  <div className="relative px-6 pt-24 pb-20 sm:pt-32 lg:static lg:px-8 lg:py-48 ">
    {children}
  </div>
);

const BackgroundWrapper: ComponentWithChildren = ({ children }) => (
  <div
    className="absolute inset-y-0 left-0 w-full  overflow-hidden bg-gray-300 -z-10 ring-1 ring-gray-900/10 lg:w-1/2 
  "
  >
    {children}
  </div>
);

const Title: ComponentWithChildren = ({ children }) => (
  <div className="font-bold tracking-tight text-gray-900">{children}</div>
);

const P: ComponentWithChildren = ({ children }) => (
  <p className="mt-6 text-lg leading-8 text-gray-600">{children}</p>
);

/*****************
 * Components
 */
const BackgroundSVG = () => (
  <svg
    className="absolute inset-0 h-full w-full stroke-blue-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
    aria-hidden="true"
  >
    <defs>
      <pattern
        id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
        width={200}
        height={200}
        x="100%"
        y={-1}
        patternUnits="userSpaceOnUse"
      >
        <path d="M130 200V.5M.5 .5H200" fill="transparent" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" strokeWidth={0} fill="white" />
    <svg x="100%" y={-1} className="overflow-visible fill-gray-50">
      <path d="M-470.5 0h201v201h-201Z" strokeWidth={1} />
    </svg>
    <rect
      width="100%"
      height="100%"
      strokeWidth={0}
      fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
    />
  </svg>
);
