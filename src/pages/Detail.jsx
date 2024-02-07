import { useContext } from "react";
import { useParams } from "react-router-dom";
import { TodoContext } from "../context/TodoContext";

const Detail = () => {
  const { id } = useParams();
  const { todos } = useContext(TodoContext);
  const { title, content, isDone, deadline } = todos.find((todo) => todo.id.toString() === id);

  return (
    <div>
      <h2>Todo Detail</h2>
      <p>Title: {title}</p>
      <p>Content: {content}</p>
      <p>Deadline: {deadline}</p>
      <p>Done: {isDone ? "Yes" : "No"}</p>
    </div>
  );
};

export default Detail;
