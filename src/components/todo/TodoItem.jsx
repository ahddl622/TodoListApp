const TodoItem = ({ todo, onDeleteTodoItem, onToggleTodoItem }) => {
  const { id, title, content, isDone, deadline } = todo;

  const formattedDeadLine = new Date(deadline).toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long"
  });

  return (
    <li>
      <article className="card">
        <div className="card-body">
          <h3>{title}</h3>
          <p>{content}</p>
          <time>{formattedDeadLine}</time>
        </div>
        <div className="card-action">
          <button
            onClick={() => onDeleteTodoItem(id)}
            className="card-action-btn btn-delete"
          >
            삭제
          </button>
          <button
            onClick={() => onToggleTodoItem(id)}
            className="card-action-btn btn-success"
          >
            {isDone ? "취소" : "완료"}
          </button>
        </div>
      </article>
    </li>
  );
};

export default TodoItem;
