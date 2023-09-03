"use client";

import Wrapper from "@/components/Shop/FilterPanel/Wrapper";
import { ProductsRequest } from "@/types";

import Section from "@/components/Shop/FilterPanel/Section";
import Label from "@/components/Shop/FilterPanel/Label";
import Select from "@/components/Shop/FilterPanel/Select";
import { ChangeEventHandler, useState } from "react";

import { usePathname, useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";

import { PanelProps } from "./types";

export default function Panel(props: PanelProps) {
  const { sortByInit, orderInit } = props;

  const [sortByValue, setSortByValue] = useState(sortByInit);
  const [orderByValue, setOrderByValue] = useState(orderInit);

  const pathname = usePathname();
  const router = useRouter();

  const handleSortByChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
    const sortByValue = e.target.value as "name" | "price";
    setSortByValue(sortByValue);

    setUrl(pathname, sortByValue, orderByValue, router);
  };

  const handleOrderByChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
    const orderByValue = e.target.value as ProductsRequest["order"];
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

/**************************
 * Data
 */
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
