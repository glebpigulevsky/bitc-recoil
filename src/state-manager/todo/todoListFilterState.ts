import { atom } from "recoil";

export const todoListFilterState = atom({
  key: "TodoListFilter",
  default: "all",
});
