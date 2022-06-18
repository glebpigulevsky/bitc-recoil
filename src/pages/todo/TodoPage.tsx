import AddTodo from "./components/AddTodo";
import { FilterTodoList } from "./components/FilterTodoList";
import { TodoList } from "./components/TodoList";

export const TodoPage = () => {
  return (
    <div>
      <FilterTodoList />
      <AddTodo />
      <TodoList />
    </div>
  );
};
