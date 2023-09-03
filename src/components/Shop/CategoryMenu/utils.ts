import { WithID, Category as CategoryType } from "@/types";

export function filterCategories(
  categories: WithID<CategoryType>[],
  currentCategory: WithID<CategoryType>,
  numCats: number // 7
) {
  const index = categories.findIndex(
    (category) => category.id === currentCategory.id
  ); // 2

  let start = index - Math.floor(numCats / 2); // 2 - 3 = -1
  let end = index + Math.floor(numCats / 2); // 2 + 3 = 5

  if (start < 0) {
    end = end - start;
    start = 0;
  }

  if (end > categories.length - 1) {
    start = start - (end - (categories.length - 1));
    end = categories.length - 1;
  }

  if (numCats % 2 === 1) {
    end = end + 1;
  }

  const filteredCategories = categories.slice(start, end);

  return filteredCategories;
}
