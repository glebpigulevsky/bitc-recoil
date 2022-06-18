import { useCallback } from "react";
import { useRecoilState } from "recoil";
import { Todo, todoState } from "../../../state-manager/todo/todoState";

interface TodoItemProps {
  todo: Todo;
}

export const TodoItem = ({ todo }: TodoItemProps) => {
  const { text, done, uuid } = todo;
  const [todoList, setTodosList] = useRecoilState(todoState);

  const onDoneClick = useCallback(() => {
    setTodosList(
      todoList.map((todo) =>
        todo.uuid === uuid ? { ...todo, done: true } : todo
      )
    );
  }, [todoList, setTodosList, uuid]);

  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <div
        style={{
          textDecoration: done ? "line-through" : "none",
        }}
      >
        {text}
      </div>
      <input
        type="checkbox"
        checked={done}
        onChange={onDoneClick}
        disabled={done}
      />
    </div>
  );
};
