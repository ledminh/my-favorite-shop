import { Category as CategoryType, WithID } from "@/types";

export type Props = {
  skeleton?: boolean;
  categories?: WithID<CategoryType>[];
  total?: number;
};

export type ListProps = {
  categories: WithID<CategoryType>[];
  total: number;
};
