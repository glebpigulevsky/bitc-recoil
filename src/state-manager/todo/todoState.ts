import { atom } from "recoil";
import { v4 } from "uuid";

export interface Todo {
  done: boolean;
  text: string;
  uuid: string;
}

export type TodosList = Array<Todo>;

export const todoState = atom<TodosList>({
  key: `"todoState"-${v4()}`,
  default: [],
});
