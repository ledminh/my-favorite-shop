import { type } from "os";
import { FC, ReactNode, MouseEventHandler } from "react";

export type Button = FC<{
  color?: "primary" | "attention";
  type?: "normal" | "link";
  href?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
}>;

export type Input = FC<{
  placeholder?: string;
}>;
