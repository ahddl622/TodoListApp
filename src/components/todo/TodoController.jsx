import { useContext, useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoSort from "./TodoSort";
import { TodoContext } from "../../context/TodoContext";

const TodoController = () => {
  const [sortOrder, setSortOder] = useState("asc");
  const {todos, setTodos} = useContext(TodoContext)

  const onChangeSortOrder = (e) => {
    const nextSortOrder = e.target.value;
    setSortOder(nextSortOrder);
  };

  useEffect(() => {
    if (sortOrder === "asc") {
      setTodos((prevTodos) =>
        [...prevTodos].sort(
          (a, b) => new Date(a.deadline) - new Date(b.deadline)
        )
      );
      return;
    }

    setTodos((prevTodos) =>
      [...prevTodos].sort((a, b) => new Date(b.deadline) - new Date(a.deadline))
    );
  }, [sortOrder, setTodos]);

  const workingTodos = todos.filter((todo) => !todo.isDone);
  const doneTodos = todos.filter((todo) => todo.isDone);
  return (
    <main>
      <TodoForm/>
      <TodoSort onChangeSortOrder={onChangeSortOrder}/>
      <TodoList
        headTitle="Working..🔥"
        todos={workingTodos}
      />
      <TodoList
        headTitle="Done..🎉"
        todos={doneTodos}
      />
    </main>
  );
};

export default TodoController;
