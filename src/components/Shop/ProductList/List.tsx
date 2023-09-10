"use client";

import LoadMoreButton from "@/components/LoadMoreButton";

import Product from "./Product";

import ListWrapper from "@/components/Shop/ProductList/ListWrapper";

import Section from "@/theme/Section";

import { useEffect, useState } from "react";

import getProducts from "@/api-calls/getProducts";
import { itemsPerPage } from "@/theme/metadata";

import { ListProps } from "./types";

export default function List(props: ListProps) {
  const { productsInit, catID, searchTerm, sortBy, order, total } = props;

  const [products, setProducts] = useState(productsInit || []);
  const [status, setStatus] = useState<"loading" | "loaded">("loaded");

  useEffect(() => {
    const loadProducts = async () => {
      const { products: newProducts } = await getProducts({
        catID: catID || "",
        sortBy,
        order,
        offset: 0,
        limit: itemsPerPage,
        searchTerm,
        filter: null,
      });
      setProducts(newProducts);
    };

    setStatus("loading");
    loadProducts().then(() => setStatus("loaded"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [catID, searchTerm, sortBy, order]);

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
        {products.length === 0 && (
          <div className="p-4 bg-neutral-200">
            <p className="text-2xl">No product found</p>
          </div>
        )}
        <ListWrapper>
          {status === "loading"
            ? Array.from({ length: 4 }).map((_, i) => (
                <Product key={i} skeleton />
              ))
            : products.map((product) => (
                <Product key={product.id} product={product} />
              ))}
        </ListWrapper>
      </Section>
      <Section>
        {status === "loaded" && total > products.length && (
          <LoadMoreButton onLoadMore={loadMore} />
        )}
      </Section>
    </>
  );
}
