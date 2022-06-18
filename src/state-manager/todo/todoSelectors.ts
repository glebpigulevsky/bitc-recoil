import { selector } from "recoil";
import { v4 } from "uuid";
import { todoState } from "../todo/todoState";
import { todoListFilterState } from "./todoListFilterState";

export const todosListSelector = selector({
  key: `todoStateSelector-${v4()}`,
  get: ({ get }) => {
    const todoList = get(todoState);

    return todoList;
  },
});

export const filteredTodoListState = selector({
  key: "FilteredTodoList",
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoState);

    switch (filter) {
      case "completed":
        return list.filter((item) => item.done);
      case "uncompleted":
        return list.filter((item) => !item.done);
      default:
        return list;
    }
  },
});
