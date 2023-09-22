import { Product as ProductType, WithID } from "@/types";

export type Props =
  | {
      skeleton: true;
      productsInit?: undefined;
      catID?: undefined;
      searchTerm?: undefined;
      sortBy?: undefined;
      order?: undefined;
      total?: undefined;
    }
  | ({
      skeleton?: false;
      productsInit: WithID<ProductType>[];
      sortBy: "name" | "price";
      order: "asc" | "desc";
      total: number;
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

export type ListProps = {
  productsInit: WithID<ProductType>[];
  sortBy: "name" | "price";
  order: "asc" | "desc";
  total: number;
  catID?: string;
  searchTerm?: string;
};
