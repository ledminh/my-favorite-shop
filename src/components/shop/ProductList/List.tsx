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
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadProducts = async () => {
      const { products: newProducts } = await getProducts({
        catID: catID ?? "",
        sortBy,
        order,
        offset: 0,
        limit: itemsPerPage,
        searchTerm,
        filter: null,
      });
      setProducts(newProducts);
    };

    loadProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [catID, searchTerm, sortBy, order]);

  const loadMore = async () => {
    if (loading) {
      return;
    }

    setLoading(true);

    const { products: newProducts } = await getProducts({
      catID: catID ?? "",
      sortBy,
      order,
      offset: products.length,
      limit: itemsPerPage,
      searchTerm,
      filter: null,
    });

    setProducts([...products, ...newProducts]);

    setLoading(false);
  };
  return (
    <>
      <Section>
        <ListWrapper>
          {products.length === 0 ? (
            <div className="p-4 bg-neutral-200">
              <p className="text-2xl">No product found</p>
            </div>
          ) : (
            products.map((product) => (
              <Product key={product.id} product={product} />
            ))
          )}
        </ListWrapper>
      </Section>
      <Section>
        {total > products.length && (
          <div className="flex justify-center w-full">
            <LoadMoreButton onLoadMore={loadMore} loading={loading} />
          </div>
        )}
      </Section>
    </>
  );
}
