import { TITLES } from "@/const/title";
import { ReactNode } from "react";

export type Titles = keyof typeof TITLES;

export type WithChildren = {
  children: ReactNode;
};
