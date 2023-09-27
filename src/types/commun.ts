import { TITLES } from "@/const/title";
import { ReactElement } from "react";

export type Titles = keyof typeof TITLES;

export type WithChildren = {
  children: ReactElement;
};
