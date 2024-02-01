import { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoSort from "./TodoSort";

const todoObj = {
  id: 1,
  title: "Learn React",
  content: "Learn React today",
  deadline: "2024-02-01",
  isDone: false,
};

const TodoController = () => {
  const [todos, setTodos] = useState([todoObj]);
  const [sortOrder, setSortOder] = useState("asc");

  const onSubmitTodo = (nextTodo) => {
    setTodos((prevTodos) => [nextTodo, ...prevTodos]);
  };

  const onDeleteTodoItem = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const onToggleTodoItem = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todoItem) => {
        if (todoItem.id === id) {
          return {
            ...todoItem,
            isDone: !todoItem.isDone,
          };
        }
        return todoItem;
      })
    );
  };

  const onChangeSortOrder = (e) => {
    const nextSortOrder = e.target.value;
    setSortOder(nextSortOrder);
  };

  useEffect(() => {
    console.log("sortOrder =>", sortOrder)
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
  }, [sortOrder]);

  const workingTodos = todos.filter((todo) => !todo.isDone);
  const doneTodos = todos.filter((todo) => todo.isDone);
  return (
    <main>
      <TodoForm onSubmitTodo={onSubmitTodo} />
      <TodoSort onChangeSortOrder={onChangeSortOrder}/>
      <TodoList
        headTitle="Working..🔥"
        todos={workingTodos}
        onDeleteTodoItem={onDeleteTodoItem}
        onToggleTodoItem={onToggleTodoItem}
      />
      <TodoList
        headTitle="Done..🎉"
        todos={doneTodos}
        onDeleteTodoItem={onDeleteTodoItem}
        onToggleTodoItem={onToggleTodoItem}
      />
    </main>
  );
};

export default TodoController;
