import { type } from "os";
import { FC, ReactNode, MouseEventHandler } from "react";

export type Button = FC<{
  color?: "primary" | "attention" | "secondary";
  type?: "normal" | "link";
  size?: "lg" | "md" | "sm";
  border?: "rounded" | "square";
  href?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
  buttonType?: "submit";
  disabled?: boolean;
}>;

export type Input = FC<{
  placeholder?: string;
  size?: "lg" | "md";
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  value: string;
}>;
