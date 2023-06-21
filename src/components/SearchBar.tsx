"use client";

import { useState } from "react";
import { Input } from "@/theme/basics";

import { useRouter } from "next/navigation";

type SearchBarProps = {
  size?: "md" | "lg";
};

export default function SearchBar({ size = "lg" }: SearchBarProps) {
  const [term, setTerm] = useState<string>("");

  const router = useRouter();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.value);
  };

  const onKeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && term !== "") {
      setTerm("");
      router.push(`/search/${term}`);
    }

    if (e.key === "Escape") {
      setTerm("");
    }
  };

  return (
    <div onClick={(e) => e.stopPropagation()}>
      <Input
        placeholder="Search ..."
        size={size}
        onChange={onChange}
        onKeyDown={onKeydown}
        value={term}
      />
    </div>
  );
}
