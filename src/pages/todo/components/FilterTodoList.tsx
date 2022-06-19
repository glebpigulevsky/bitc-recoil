import { useCallback } from "react";
import { useRecoilState } from "recoil";
import { todoListFilterState } from "../../../state-manager/todo/todoListFilterState";

export const FilterTodoList = () => {
  const [filter, setTodosFilterList] = useRecoilState(todoListFilterState);

  const onRadioClick = useCallback(
    (event: any) => {
      setTodosFilterList(event.target.value);
    },
    [setTodosFilterList]
  );

  return (
    <div>
      <input
        type="radio"
        value="completed"
        name="todosFilter"
        onClick={onRadioClick}
        defaultChecked={filter === "completed"}
      />
      Completed
      <input
        type="radio"
        value="uncompleted"
        name="todosFilter"
        onClick={onRadioClick}
        defaultChecked={filter === "uncompleted"}
      />{" "}
      Uncompleted
      <input
        type="radio"
        value="all"
        name="todosFilter"
        onClick={onRadioClick}
        defaultChecked={filter === "all"}
      />{" "}
      All
    </div>
  );
};
