import { useContext } from "react";
import {
  TodoActionBtn,
  TodoActionContainer,
  TodoCardItem,
  TodoCardItemContainer,
} from "../../style/TodoStyle";
import { useNavigate } from "react-router-dom";
import { TodoContext } from "../../context/TodoContext";

const TodoItem = ({ todo }) => {
  const { id, title, content, isDone, deadline } = todo;
  const { onDeleteTodoItem, onToggleTodoItem } = useContext(TodoContext);
  const navigate = useNavigate()

  const formattedDeadLine = new Date(deadline).toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  });

  return (
    <li>
      <TodoCardItemContainer onClick={() => navigate(`/detail/${id}`)}>
        <TodoCardItem $isDone={isDone}>
          <h3>{title}</h3>
          <p>{content}</p>
          <time>{formattedDeadLine}</time>
        </TodoCardItem>
        <TodoActionContainer onClick={(e) => e.stopPropagation()}>
          <TodoActionBtn
            $backgroundColor="tomato"
            onClick={() => onDeleteTodoItem(id)}
          >
            삭제
          </TodoActionBtn>
          <TodoActionBtn
            $backgroundColor="skyblue"
            onClick={() => onToggleTodoItem(id)}
          >
            {isDone ? "취소" : "완료"}
          </TodoActionBtn>
        </TodoActionContainer>
      </TodoCardItemContainer>
    </li>
  );
};

export default TodoItem;
