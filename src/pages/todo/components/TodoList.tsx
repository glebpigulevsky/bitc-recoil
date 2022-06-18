import React from "react";
import { useRecoilValue } from "recoil";
import { filteredTodoListState } from "../../../state-manager/todo/todoSelectors";
import { TodoItem } from "./TodoItem";

export const TodoList = () => {
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <>
      {todoList?.map((todo) => (
        <TodoItem key={todo.uuid} todo={todo} />
      ))}
    </>
  );
};
