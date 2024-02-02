import {
  TodoActionBtn,
  TodoActionContainer,
  TodoCardItem,
  TodoCardItemContainer,
} from "../../style/TodoStyle";

const TodoItem = ({ todo, onDeleteTodoItem, onToggleTodoItem }) => {
  const { id, title, content, isDone, deadline } = todo;

  const formattedDeadLine = new Date(deadline).toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  });

  return (
    <li>
      <TodoCardItemContainer>
        <TodoCardItem $isDone={isDone}>
          <h3>{title}</h3>
          <p>{content}</p>
          <time>{formattedDeadLine}</time>
        </TodoCardItem>
        <TodoActionContainer>
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
