"use client";

import { ComponentWithChildren } from "@/types";

import { H2 } from "@/theme/typography";
import { Button } from "@/theme/basics";
import { ForwardedRef, forwardRef } from "react";

import { useForm } from "react-hook-form";

import {
  namePattern,
  emailPattern,
  numberPattern,
} from "@/utils/regexPatterns";

export default function ShippingAddress() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <Wrapper>
      <Title>
        <H2>Shipping Address</H2>
      </Title>
      <Form>
        <Grid6>
          <Col3>
            <Label htmlFor="firstName">First name</Label>
            <InputWrapper>
              <Input
                {...register("firstName", {
                  required: true,
                  pattern: namePattern,
                })}
              />
            </InputWrapper>
          </Col3>

          <Col3>
            <Label htmlFor="lastName">Last name</Label>
            <InputWrapper>
              <Input
                {...register("lastName", {
                  required: true,
                  pattern: namePattern,
                })}
              />
            </InputWrapper>
          </Col3>

          <ColFull>
            <Label htmlFor="streetAddress">Street address</Label>
            <InputWrapper>
              <Input
                {...register("streetAddress", {
                  required: true,
                })}
              />
            </InputWrapper>
          </ColFull>

          <Col3>
            <Label htmlFor="state">State / Province</Label>
            <InputWrapper>
              <select
                id="country"
                name="country"
                autoComplete="country-name"
                className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
              >
                <option />
                <option>California</option>
                <option>Texas</option>
                <option>South Carolina</option>
              </select>
            </InputWrapper>
          </Col3>

          <Col3>
            <Label htmlFor="city">City</Label>
            <InputWrapper>
              <Input
                {...register("city", {
                  required: true,
                  pattern: namePattern,
                })}
              />
            </InputWrapper>
          </Col3>

          <Col3>
            <Label htmlFor="zip">ZIP / Postal</Label>
            <InputWrapper>
              <Input
                {...register("zip", {
                  required: true,
                  pattern: numberPattern,
                })}
              />
            </InputWrapper>
          </Col3>
          <Col3>
            <Label htmlFor="phone">Phone</Label>
            <InputWrapper>
              <Input
                {...register("phone", {
                  required: true,
                  pattern: numberPattern,
                })}
              />
            </InputWrapper>
          </Col3>

          <ColFull>
            <Label htmlFor="email">Email address</Label>
            <InputWrapper>
              <Input
                {...register("email", {
                  required: true,
                  pattern: emailPattern,
                })}
              />
            </InputWrapper>
          </ColFull>
        </Grid6>
      </Form>
      <div className="flex content-center justify-center px-8 pt-6">
        <Button>Continue to Payment</Button>
      </div>
    </Wrapper>
  );
}

/******************
 * Styles
 */
const Wrapper: ComponentWithChildren = ({ children }) => (
  <div className="w-full py-6 md:border-2 md:border-blue-950/30 md:rounded-xl ">
    {children}
  </div>
);

const Title: ComponentWithChildren = ({ children }) => (
  <div className="px-5 font-semibold">{children}</div>
);

const Form: ComponentWithChildren = ({ children }) => (
  <form className="mt-10 border-y-2 border-blue-950/30">
    <div className="px-4 py-6 sm:p-8">{children}</div>
  </form>
);

const Grid6: ComponentWithChildren = ({ children }) => (
  <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
    {children}
  </div>
);

const Col3: ComponentWithChildren = ({ children }) => (
  <div className="sm:col-span-3">{children}</div>
);

const ColFull: ComponentWithChildren = ({ children }) => (
  <div className="sm:col-span-full">{children}</div>
);

const InputWrapper: ComponentWithChildren = ({ children }) => (
  <div className="mt-2">{children}</div>
);

type LabelProps = { children: React.ReactNode; htmlFor: string };

const Label = ({ children, htmlFor }: LabelProps) => (
  <label
    className="block text-sm font-medium leading-6 text-gray-900"
    htmlFor={htmlFor}
  >
    {children}
  </label>
);

type InputProps = {
  type: string;
  name: string;
  id: string;
  autoComplete: string;
};

const Input = forwardRef(function MyInput(
  props,
  ref: ForwardedRef<HTMLInputElement>
) {
  return (
    <input
      ref={ref}
      {...props}
      className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    />
  );
});
