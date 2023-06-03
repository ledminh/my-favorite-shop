import { Input } from "@/theme/basics";

type SearchBarProps = {
  size?: "md" | "lg";
};

export default function SearchBar({ size = "lg" }: SearchBarProps) {
  return <Input placeholder="Search ..." size={size} />;
}
