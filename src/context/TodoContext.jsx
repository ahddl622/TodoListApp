import { createContext, useState } from "react";

const todoObj = {
  id: 1,
  title: "React 공부하기",
  content: "React 강의 완강하기",
  deadline: "2024-02-01",
  isDone: false,
};

export const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([todoObj]);

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

  return (
    <TodoContext.Provider
      value={{
        todos,
        setTodos,
        onDeleteTodoItem,
        onSubmitTodo,
        onToggleTodoItem,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
