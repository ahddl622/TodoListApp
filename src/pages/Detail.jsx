import { useContext } from "react";
import { useParams } from "react-router-dom";
import { TodoContext } from "../context/TodoContext";
import TodoItem from "../components/todo/TodoItem";

const Detail = () => {
  const { todoId } = useParams();
  const { todos } = useContext(TodoContext);
  const todo = todos.find((todo) => todo.id === todoId);
  console.log("todoId, todos=>" , todoId, todos)

  return (
    <section>
      <TodoItem todo={todo} />
    </section>
  );
};

export default Detail;
