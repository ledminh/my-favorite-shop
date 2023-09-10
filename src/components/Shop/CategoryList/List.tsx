"use client";

import { useState } from "react";

import Wrapper from "./Wrapper";
import ListWrapper from "./ListWrapper";
import Item from "./Item";
import Category from "@/components/Shop/Category";
import { ListProps } from "./type";
import LoadMoreButton from "@/components/LoadMoreButton";
import getCategories from "@/api-calls/getCategories";

import { itemsPerPage } from "@/theme/metadata";

export default function List(props: ListProps) {
  const [categories, setCategories] = useState(props.categories);
  const [total, setTotal] = useState(props.total);

  const onLoadMore = () => {
    getCategories({
      sortBy: "name",
      order: "asc",
      offset: categories.length,
      limit: itemsPerPage,
    }).then((data) => {
      setCategories([...categories, ...data.categories]);
      setTotal(data.total);
    });
  };

  return (
    <Wrapper>
      {categories.length === 0 && (
        <div className="p-4 bg-neutral-200">
          <p className="text-2xl">No category found</p>
        </div>
      )}
      <ListWrapper>
        {categories.map((category) => (
          <Item key={category.id}>
            <Category type="Card" category={category} />
          </Item>
        ))}
      </ListWrapper>
      {categories.length < total && <LoadMoreButton onLoadMore={onLoadMore} />}
    </Wrapper>
  );
}
