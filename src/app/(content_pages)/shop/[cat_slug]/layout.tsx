import Section from "@/theme/Section";
import CategoryMenu from "@/components/shop/CategoryMenu";

import categories from "@/data/categories";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
