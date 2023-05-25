import { type } from "os";
import { FC, ReactNode } from "react";

export type Logo = FC;

export type MainNav = FC<{ children: ReactNode }>;

export type MainNavItem = FC<{ href: string; children: ReactNode }>;

export type Header = FC<{ children: ReactNode }>;
