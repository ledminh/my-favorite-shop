"use client";

import { ComponentWithChildren } from "@/types";

import { State } from "country-state-city";

import { H2 } from "@/theme/typography";
import { Button } from "@/theme/basics";
import { ForwardedRef, forwardRef, useState } from "react";

import { useForm } from "react-hook-form";

import FormErrorMessage from "@/theme/FormErrorMessage";

import useCart from "@/utils/useCart";

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

  const { cart } = useCart();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Wrapper>
      <Title>
        <H2>Shipping Address</H2>
      </Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div className="px-4 py-6 sm:p-8 border-y-2">
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
              {errors?.firstName?.type === "pattern" && (
                <FormErrorMessage>
                  First name can only contain letter
                </FormErrorMessage>
              )}
              {errors?.firstName?.type === "required" && (
                <FormErrorMessage>First name is required</FormErrorMessage>
              )}
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
              {errors?.lastName?.type === "pattern" && (
                <FormErrorMessage>
                  Last name can only contain letter
                </FormErrorMessage>
              )}
              {errors?.lastName?.type === "required" && (
                <FormErrorMessage>Last name is required</FormErrorMessage>
              )}
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
              {errors?.streetAddress?.type === "required" && (
                <FormErrorMessage>Street address is required</FormErrorMessage>
              )}
            </ColFull>

            <Col3>
              <Label htmlFor="state">State / Province</Label>
              <InputWrapper>
                <select
                  autoComplete="country-name"
                  className="block w-full rounded-md border-0 p-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  {...register("state", { required: true })}
                >
                  <option />
                  {State.getStatesOfCountry("US").map((state) => (
                    <option key={state.isoCode} value={state.isoCode}>
                      {state.name}
                    </option>
                  ))}
                </select>
              </InputWrapper>
              {errors?.state?.type === "required" && (
                <FormErrorMessage>State is required</FormErrorMessage>
              )}
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
              {errors?.city?.type === "required" && (
                <FormErrorMessage>City is required</FormErrorMessage>
              )}
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
              {errors?.zip?.type === "required" && (
                <FormErrorMessage>Zip code is required</FormErrorMessage>
              )}
              {errors?.zip?.type === "pattern" && (
                <FormErrorMessage>
                  Zip code can only contain number
                </FormErrorMessage>
              )}
            </Col3>
            <Col3>
              <Label htmlFor="phone">Phone</Label>
              <InputWrapper>
                <Input
                  {...register("phone", {
                    pattern: numberPattern,
                  })}
                />
              </InputWrapper>
              {errors?.phone?.type === "pattern" && (
                <FormErrorMessage>
                  Phone can only contain number
                </FormErrorMessage>
              )}
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
              {errors?.email?.type === "pattern" && (
                <FormErrorMessage>Invalid email address</FormErrorMessage>
              )}
              {errors?.email?.type === "required" && (
                <FormErrorMessage>Email is required</FormErrorMessage>
              )}
            </ColFull>
          </Grid6>
        </div>
        <div className="flex content-center justify-center px-8 pt-6">
          <Button disabled={cart.length === 0}>Continue to Payment</Button>
        </div>
      </Form>
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

type FormProps = {
  children: React.ReactNode;
  onSubmit: (data: any) => void;
};

const Form = ({ children, onSubmit }: FormProps) => (
  <form className="mt-10  border-blue-950/30" onSubmit={onSubmit}>
    {children}
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

const Input = forwardRef(function MyInput(
  props,
  ref: ForwardedRef<HTMLInputElement>
) {
  return (
    <input
      ref={ref}
      {...props}
      className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    />
  );
});
