"use client";

import { ComponentWithChildren } from "@/types";
import { FormEventHandler, ForwardedRef, forwardRef } from "react";

import { useForm } from "react-hook-form";

// TODO: add form validation
// TODO: add textarea rows
// https://dev.to/hellodemola/handle-form-better-in-nextjs-with-react-hook-form-3o61

export default function Form() {
  const { register, handleSubmit } = useForm();

  return (
    <Wrapper onSubmit={handleSubmit((data) => console.log(data))}>
      <Body>
        <Col1>
          <Label htmlFor="first-name">First name</Label>
          <InputWrapper>
            <Input {...register("firstName")} />
          </InputWrapper>
        </Col1>
        <Col1>
          <Label htmlFor="last-name">Last name</Label>
          <InputWrapper>
            <Input {...register("lastName", { required: true })} />
          </InputWrapper>
        </Col1>
        <Col2>
          <Label htmlFor="email">Email</Label>
          <InputWrapper>
            <Input {...register("email", { required: true })} />
          </InputWrapper>
        </Col2>
        <Col2>
          <Label htmlFor="phone-number">Phone Number</Label>
          <InputWrapper>
            <Input {...register("phoneNumber", { required: true })} />
          </InputWrapper>
        </Col2>
        <Col2>
          <Label htmlFor="message">Message</Label>
          <InputWrapper>
            <TextArea {...register("message", { required: true })} />
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

type WrapperProps = {
  children: React.ReactNode;
  onSubmit: FormEventHandler<HTMLFormElement>;
};

const Wrapper = ({ children, onSubmit }: WrapperProps) => (
  <form
    action="#"
    method="POST"
    className="px-6 pt-20 pb-24 sm:pb-32 lg:px-8 lg:py-48"
    onSubmit={onSubmit}
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

const Input = forwardRef(function MyInput(
  props,
  ref: ForwardedRef<HTMLInputElement>
) {
  return (
    <input
      ref={ref}
      {...props}
      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6 focus:outline-none"
    />
  );
});

const TextArea = forwardRef(function MyTextArea(
  props,
  ref: ForwardedRef<HTMLTextAreaElement>
) {
  return (
    <textarea
      ref={ref}
      {...props}
      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6 focus:outline-none"
    />
  );
});

const Button: ComponentWithChildren = ({ children }) => (
  <button
    type="submit"
    className="rounded-md bg-blue-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition duration-150 ease-in-out"
  >
    {children}
  </button>
);
