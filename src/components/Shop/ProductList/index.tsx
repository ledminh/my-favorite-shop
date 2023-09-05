"use client";

import type { ComponentWithChildren, Product as ProductType } from "@/types";
import Product from "./Product";

import List from "@/components/Shop/ProductList/List";

import Section from "@/theme/Section";

import { useState } from "react";

import getProducts from "@/api-calls/getProducts";
import { itemsPerPage } from "@/theme/metadata";
import Skeleton from "./Skeleton";

import { Props } from "./types";
import LoadMoreButton from "@/components/LoadMoreButton";

export default function ProductList({
  productsInit,
  catID,
  searchTerm,
  sortBy = "name",
  order = "asc",
  skeleton,
  initTotal,
}: Props) {
  if (skeleton) {
    return <Skeleton />;
  }

  const [products, setProducts] = useState(productsInit || []);
  const [total, setTotal] = useState(initTotal || 0);

  const loadMore = async () => {
    const { products: newProducts } = await getProducts({
      catID: catID || "",
      sortBy,
      order,
      offset: products.length,
      limit: itemsPerPage,
      searchTerm,
      filter: null,
    });
    setProducts([...products, ...newProducts]);
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
        {total > products.length && <LoadMoreButton onLoadMore={loadMore} />}
      </Section>
    </>
  );
}
