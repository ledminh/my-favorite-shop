"use client";

import { CheckCircleIcon } from "@/theme/Icons";
import { ComponentWithChildren } from "@/types";

import { useState, FormEventHandler, ForwardedRef, forwardRef } from "react";

import { CustomerMessage } from "@/types";

import { useForm } from "react-hook-form";

import sendMessage from "@/api-calls/sendMessage";

import FormErrorMessage from "@/theme/FormErrorMessage";

import {
  namePattern,
  emailPattern,
  numberPattern,
} from "@/utils/regexPatterns";
import Link from "next/link";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [sent, setSent] = useState(false);

  const onSubmit = (data: any) => {
    sendMessage(data as Omit<CustomerMessage, "status" | "createdAt">);

    setSent(true);
  };

  if (sent) {
    return <AfterSentMessage />;
  }

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <Body>
        <Col1>
          <Label htmlFor="firstName">
            First name <Asterix />
          </Label>
          <InputWrapper>
            <Input
              {...register("firstName", {
                required: true,
                pattern: namePattern,
              })}
            />
          </InputWrapper>
          {errors?.firstName?.type === "pattern" && (
            <FormErrorMessage>
              First name can only contain letter
            </FormErrorMessage>
          )}
          {errors?.firstName?.type === "required" && (
            <FormErrorMessage>First name is required</FormErrorMessage>
          )}
        </Col1>
        <Col1>
          <Label htmlFor="lastName">
            Last name <Asterix />
          </Label>
          <InputWrapper>
            <Input
              {...register("lastName", {
                required: true,
                pattern: namePattern,
              })}
            />
          </InputWrapper>
          {errors?.lastName?.type === "pattern" && (
            <FormErrorMessage>
              Last name can only contain letter
            </FormErrorMessage>
          )}
          {errors?.lastName?.type === "required" && (
            <FormErrorMessage>Last name is required</FormErrorMessage>
          )}
        </Col1>
        <Col2>
          <Label htmlFor="email">
            Email <Asterix />
          </Label>
          <InputWrapper>
            <Input
              {...register("email", { required: true, pattern: emailPattern })}
            />
          </InputWrapper>
          {errors?.email?.type === "pattern" && (
            <FormErrorMessage>Invalid email address</FormErrorMessage>
          )}
          {errors?.email?.type === "required" && (
            <FormErrorMessage>Email is required</FormErrorMessage>
          )}
        </Col2>
        <Col2>
          <Label htmlFor="phone">Phone Number</Label>
          <InputWrapper>
            <Input
              {...register("phone", {
                pattern: numberPattern,
              })}
            />
          </InputWrapper>
          {errors?.phoneNumber?.type === "pattern" && (
            <FormErrorMessage>
              Phone number can only contain number
            </FormErrorMessage>
          )}
        </Col2>
        <Col2>
          <Label htmlFor="message">
            Message <Asterix />
          </Label>
          <InputWrapper>
            <TextArea {...register("message", { required: true })} />
          </InputWrapper>
          {errors?.message?.type === "required" && (
            <FormErrorMessage>Message is required</FormErrorMessage>
          )}
        </Col2>
        <Col2>
          <Note>(*) Required</Note>
        </Col2>
      </Body>
      <Footer>
        <Button>Send message</Button>
      </Footer>
    </FormWrapper>
  );
}

/*********************
 * Styles
 */

type WrapperProps = {
  children: React.ReactNode;
  onSubmit: FormEventHandler<HTMLFormElement>;
};

const FormWrapper = ({ children, onSubmit }: WrapperProps) => (
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

const Note: ComponentWithChildren = ({ children }) => (
  <p className="mt-2.5 text-sm text-gray-500">{children}</p>
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

const Asterix = () => <span className="text-xs align-super">(*)</span>;

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

const AfterSentMessage = () => (
  <div className="flex flex-col items-center justify-center h-[900px] px-10 gap-4">
    <CheckCircleIcon className="w-24 h-24 text-gray-600" />
    <div className="text-2xl font-semibold text-center text-gray-600">
      Thank you for your message. We will get back to you as soon as possible.
    </div>
    <Link href="/" className="text-blue-600 hover:underline">
      Go back to home page
    </Link>
  </div>
);

const TextArea = forwardRef(function MyTextArea(
  props,
  ref: ForwardedRef<HTMLTextAreaElement>
) {
  return (
    <textarea
      ref={ref}
      {...props}
      className="h-[250px] block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6 focus:outline-none"
    />
  );
});

type ButtonProps = {
  children: React.ReactNode;
};

const Button = ({ children }: ButtonProps) => (
  <button
    type="submit"
    className="rounded-md bg-blue-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition duration-150 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
  >
    {children}
  </button>
);
