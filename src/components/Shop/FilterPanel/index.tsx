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
  sortByInit: "name" | "price";
  orderInit: "asc" | "desc";
};

export default function FilterPanel({ sortByInit, orderInit }: Props) {
  const [sortByValue, setSortByValue] = useState<"name" | "price">(sortByInit);
  const [orderByValue, setOrderByValue] = useState<"asc" | "desc">(orderInit);

  const pathname = usePathname();
  const router = useRouter();

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
const Wrapper: ComponentWithChildren = ({ children }) => {
  return (
    <div className="grid grid-cols-2 gap-6 w-11/12 mx-auto bg-blue-200 rounded-md p-2 max-w-md">
      {children}
    </div>
  );
};

const Section: ComponentWithChildren = ({ children }) => {
  return <div className="sm:flex items-center gap-2">{children}</div>;
};

type LabelProps = {
  children: React.ReactNode;
  htmlFor: string;
};

const Label = ({ children, htmlFor }: LabelProps) => {
  return (
    <label
      htmlFor={htmlFor}
      className="text-sm font-medium leading-6 text-gray-900 sm:basis-2/3 flex"
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
