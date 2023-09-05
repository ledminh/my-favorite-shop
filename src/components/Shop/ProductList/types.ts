import { Product as ProductType, WithID } from "@/types";

export type Props =
  | {
      skeleton: true;
      productsInit?: undefined;
      catID?: undefined;
      searchTerm?: undefined;
      sortBy?: undefined;
      order?: undefined;
      initTotal?: undefined;
    }
  | ({
      skeleton?: false;
      productsInit: WithID<ProductType>[];
      sortBy: "name" | "price";
      order: "asc" | "desc";
      initTotal: number;
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
