"use client";

import LoadMoreButton from "@/components/LoadMoreButton";

import Product from "./Product";

import ListWrapper from "@/components/Shop/ProductList/ListWrapper";

import Section from "@/theme/Section";

import { useState } from "react";

import getProducts from "@/api-calls/getProducts";
import { itemsPerPage } from "@/theme/metadata";

import { ListProps } from "./types";

export default function List(props: ListProps) {
  const { productsInit, catID, searchTerm, sortBy, order, total } = props;

  const [products, setProducts] = useState(productsInit || []);

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
        <ListWrapper>
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </ListWrapper>
      </Section>
      <Section>
        {total > products.length && <LoadMoreButton onLoadMore={loadMore} />}
      </Section>
    </>
  );
}
