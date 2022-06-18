import { useCallback, useState } from "react";
import { useRecoilState } from "recoil";
import { todoState } from "../../../state-manager/todo/todoState";
import { v4 } from "uuid";

const AddTodo = () => {
  const [todoList, setTodosList] = useRecoilState(todoState);
  const [todoText, setTodoText] = useState<string>("");

  const onAddTodo = useCallback(() => {
    setTodoText("");
    setTodosList([...todoList, { text: todoText, done: false, uuid: v4() }]);
  }, [todoList, setTodosList, todoText]);

  const onTodoTextChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setTodoText(event.target.value);
    },
    [setTodoText]
  );

  return (
    <>
      <button onClick={onAddTodo} disabled={todoText === ""}>
        Add Todo
      </button>
      <input type="text" value={todoText} onChange={onTodoTextChange} />
    </>
  );
};

export default AddTodo;
