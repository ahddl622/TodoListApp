import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOneTodo } from "../api/todo-api";
import TodoItem from "../components/todo/TodoItem";
import { TodoContext } from "../context/TodoContext";

const Detail = () => {
  const { todoId } = useParams();
  const [todo, setTodo] = useState(null);
  const { onDeleteTodoItem, onToggleTodoItem } = useContext(TodoContext);

  useEffect(() => {
    const fetchTodo = async () => {
      const data = await getOneTodo(todoId);

      setTodo(data);
    };

    fetchTodo();
  }, [todoId]);

  const handleDeleteTodoItem = async (id) => {
    await onDeleteTodoItem(id);

    setTodo(null);
  };

  const handleToggleTodoItem = async (id) => {
    await onToggleTodoItem(id);

    setTodo((prevTodo) => ({
      ...prevTodo,
      isDone: !prevTodo.isDone,
    }));
  };

  if (!todo) {
    return <div>로딩 중</div>;
  }

  return (
    <section>
      <TodoItem
        todo={todo}
        onDeleteTodoItem={handleDeleteTodoItem}
        onToggleTodoItem={handleToggleTodoItem}
      />
    </section>
  );
};

export default Detail;
