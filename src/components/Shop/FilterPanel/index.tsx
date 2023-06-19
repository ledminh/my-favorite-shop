"use client";

import { ComponentWithChildren } from "@/types";
import { ChangeEventHandler, useState } from "react";

import { usePathname, useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";

const sortBy = [
  {
    id: "name",
    name: "Name",
  },
  {
    id: "price",
    name: "Price",
  },
];

const orderBy = {
  name: [
    {
      id: "asc",
      name: "A to Z",
    },
    {
      id: "desc",
      name: "Z to A",
    },
  ],
  price: [
    {
      id: "asc",
      name: "Low to High",
    },
    {
      id: "desc",
      name: "High to Low",
    },
  ],
};

type Props = {
  sortByInit?: "name" | "price";
  orderInit?: "asc" | "desc";
  skeleton?: boolean;
};

export default function FilterPanel({
  sortByInit = "name",
  orderInit = "asc",
  skeleton = false,
}: Props) {
  const [sortByValue, setSortByValue] = useState<"name" | "price">(sortByInit);
  const [orderByValue, setOrderByValue] = useState<"asc" | "desc">(orderInit);

  const pathname = usePathname();
  const router = useRouter();

  if (skeleton) {
    return <Wrapper skeleton={true}>{}</Wrapper>;
  }

  const handleSortByChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
    const sortByValue = e.target.value as "name" | "price";
    setSortByValue(sortByValue);

    setUrl(pathname, sortByValue, orderByValue, router);
  };

  const handleOrderByChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
    const orderByValue = e.target.value as "asc" | "desc";
    setOrderByValue(orderByValue);

    setUrl(pathname, sortByValue, orderByValue, router);
  };

  return (
    <Wrapper>
      <Section>
        <Label htmlFor="sortBy">Sort by</Label>
        <Select
          id="sortBy"
          name="sortBy"
          onChange={handleSortByChange}
          defaultValue={sortByValue}
        >
          {sortBy.map((option) => (
            <option key={option.id} value={option.id}>
              {option.name}
            </option>
          ))}
        </Select>
      </Section>
      <Section>
        <Label htmlFor="orderBy">Order by</Label>
        <Select
          id="orderBy"
          name="orderBy"
          onChange={handleOrderByChange}
          defaultValue={orderByValue}
        >
          {orderBy[sortByValue].map((option) => (
            <option key={option.id} value={option.id}>
              {option.name}
            </option>
          ))}
        </Select>
      </Section>
    </Wrapper>
  );
}

/**************************
 * Styles
 */

type WrapperProps = {
  skeleton?: boolean;
  children: React.ReactNode;
};

const Wrapper = ({ children, skeleton = false }: WrapperProps) => {
  if (skeleton) {
    return (
      <div className="grid w-11/12 max-w-md grid-cols-2 gap-6 p-2 mx-auto bg-blue-200 rounded-md">
        <div className="h-8 bg-blue-400 rounded-md animate-pulse"></div>
        <div className="h-8 bg-blue-400 rounded-md animate-pulse"></div>
      </div>
    );
  }

  return (
    <div className="grid w-11/12 max-w-md grid-cols-2 gap-6 p-2 mx-auto bg-blue-200 rounded-md">
      {children}
    </div>
  );
};

const Section: ComponentWithChildren = ({ children }) => {
  return <div className="items-center gap-2 sm:flex">{children}</div>;
};

type LabelProps = {
  children: React.ReactNode;
  htmlFor: string;
};

const Label = ({ children, htmlFor }: LabelProps) => {
  return (
    <label
      htmlFor={htmlFor}
      className="flex text-sm font-medium leading-6 text-gray-900 sm:basis-2/3"
    >
      {children}
    </label>
  );
};

type SelectProps = {
  id: string;
  name: string;
  defaultValue?: string;
  onChange?: ChangeEventHandler<HTMLSelectElement>;
  children: React.ReactNode;
};

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

/***********************
 * Utils
 */
const setUrl = (
  pathname: string,
  sortByValue: string,
  orderByValue: string,
  router: AppRouterInstance
) => {
  const url = new URL(pathname, window.location.origin);

  url.searchParams.set("sortBy", sortByValue);
  url.searchParams.set("order", orderByValue);

  router.push(url.toString());
};
