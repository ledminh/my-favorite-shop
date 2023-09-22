import { ProductsRequest } from "@/types";
import { ChangeEventHandler } from "react";

export type SortBy = "name" | "price";
export type OrderBy = ProductsRequest["order"];

export type Props =
  | {
      sortByInit: SortBy;
      orderInit: OrderBy;
      skeleton?: false;
    }
  | {
      skeleton: true;
      sortByInit?: undefined;
      orderInit?: undefined;
    };

export type PanelProps = {
  sortByInit: SortBy;
  orderInit: OrderBy;
};

export type SelectProps = {
  id: string;
  name: string;
  defaultValue?: string;
  onChange?: ChangeEventHandler<HTMLSelectElement>;
  children: React.ReactNode;
};

export type LabelProps = {
  children: React.ReactNode;
  htmlFor: string;
};
