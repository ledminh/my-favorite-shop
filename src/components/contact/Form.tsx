import { ComponentWithChildren } from "@/types";

export default function Form() {
  return (
    <Wrapper>
      <Body>
        <Col1>
          <Label htmlFor="first-name">First name</Label>
          <InputWrapper>
            <Input
              type="text"
              name="first-name"
              id="first-name"
              autoComplete="given-name"
            />
          </InputWrapper>
        </Col1>
        <Col1>
          <Label htmlFor="last-name">Last name</Label>
          <InputWrapper>
            <Input
              type="text"
              name="last-name"
              id="last-name"
              autoComplete="family-name"
            />
          </InputWrapper>
        </Col1>
        <Col2>
          <Label htmlFor="email">Email</Label>
          <InputWrapper>
            <Input type="email" name="email" id="email" autoComplete="email" />
          </InputWrapper>
        </Col2>
        <Col2>
          <Label htmlFor="phone-number">Phone Number</Label>
          <InputWrapper>
            <Input
              type="tel"
              name="phone-number"
              id="phone-number"
              autoComplete="tel"
            />
          </InputWrapper>
        </Col2>
        <Col2>
          <Label htmlFor="message">Message</Label>
          <InputWrapper>
            <TextArea name="message" id="message" rows={4} defaultValue={""} />
          </InputWrapper>
        </Col2>
      </Body>
      <Footer>
        <Button>Send message</Button>
      </Footer>
    </Wrapper>
  );
}

/*********************
 * Styles
 */
const Wrapper: ComponentWithChildren = ({ children }) => (
  <form
    action="#"
    method="POST"
    className="px-6 pt-20 pb-24 sm:pb-32 lg:px-8 lg:py-48"
  >
    {children}
  </form>
);

const Body: ComponentWithChildren = ({ children }) => (
  <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
    {children}
  </div>
);

type LabelProps = {
  children: React.ReactNode;
  htmlFor: string;
};
const Label = ({ children, htmlFor }: LabelProps) => (
  <label
    htmlFor={htmlFor}
    className="block text-sm font-semibold leading-6 text-gray-900"
  >
    {children}
  </label>
);

const InputWrapper: ComponentWithChildren = ({ children }) => (
  <div className="mt-2.5">{children}</div>
);

const Col1: ComponentWithChildren = ({ children }) => <div>{children}</div>;

const Col2: ComponentWithChildren = ({ children }) => (
  <div className="sm:col-span-2">{children}</div>
);

const Footer: ComponentWithChildren = ({ children }) => (
  <div className="flex justify-end mt-8">{children}</div>
);

/****************
 * Component
 */

type InputProps = {
  type: string;
  name: string;
  id: string;
  autoComplete: string;
};

const Input = ({ type, name, id, autoComplete }: InputProps) => (
  <input
    type={type}
    name={name}
    id={id}
    autoComplete={autoComplete}
    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6 focus:outline-none"
  />
);

type TextAreaProps = {
  name: string;
  id: string;
  rows: number;
  defaultValue: string;
};

const TextArea = ({ name, id, rows, defaultValue }: TextAreaProps) => (
  <textarea
    name={name}
    id={id}
    rows={rows}
    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6 focus:outline-none"
    defaultValue={defaultValue}
  />
);

const Button: ComponentWithChildren = ({ children }) => (
  <button
    type="submit"
    className="rounded-md bg-blue-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition duration-150 ease-in-out"
  >
    {children}
  </button>
);
