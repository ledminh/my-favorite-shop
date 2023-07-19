"use client";

import type { ComponentWithChildren, Product as ProductType } from "@/types";
import Product from "./Product";

import Section from "@/theme/Section";

import { Button } from "@/theme/basics";

import { useState } from "react";

import { getProducts } from "@/data/products";
import { itemsPerPage } from "@/theme/metadata";
type Props =
  | {
      skeleton: true;
      productsInit?: undefined;
      catID?: undefined;
      searchTerm?: undefined;
      sortBy?: undefined;
      order?: undefined;
    }
  | ({
      skeleton?: false;
      productsInit: ProductType[];
      sortBy: "name" | "price";
      order: "asc" | "desc";
    } & (
      | {
          catID: string;
          searchTerm?: undefined;
        }
      | {
          catID?: undefined;
          searchTerm: string;
        }
    ));

export default function ProductList({
  productsInit,
  catID,
  searchTerm,
  sortBy = "name",
  order = "asc",
  skeleton = false,
}: Props) {
  if (skeleton) {
    return (
      <List>
        {[...Array(8)].map((_, i) => (
          <Product key={i} skeleton={true} />
        ))}
      </List>
    );
  }

  const [products, setProducts] = useState<ProductType[]>(productsInit || []);
  const [offset, setOffset] = useState(0);

  const loadMore = async () => {
    if (catID) {
      const newProducts = await getProducts({
        catID,
        sortBy,
        order,
        offset: offset + itemsPerPage,
      });
      setProducts([...products, ...newProducts]);
      setOffset(offset + itemsPerPage);
      return;
    }

    if (searchTerm) {
      const newProducts = await getProducts({
        searchTerm,
        sortBy,
        order,
        offset: offset + itemsPerPage,
      });
      setProducts([...products, ...newProducts]);
      setOffset(offset + itemsPerPage);
      return;
    }
  };

  return (
    <>
      <Section>
        <List>
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </List>
      </Section>
      <Section>
        <LoadMore>
          <Button onClick={loadMore}>Load more</Button>
        </LoadMore>
      </Section>
    </>
  );
}

/************************
 * Styles
 */
const List: ComponentWithChildren = ({ children }) => {
  return (
    <ul className="grid w-11/12 mx-auto gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {children}
    </ul>
  );
};

const LoadMore: ComponentWithChildren = ({ children }) => {
  return <div className="w-[200px] mx-auto">{children}</div>;
};
