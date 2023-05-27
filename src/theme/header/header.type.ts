import { type } from "os";
import { FC, ReactNode } from "react";

export type MainNavItem = FC<{ href: string; children: ReactNode }>;
