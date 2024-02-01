const TodoForm = ({ onSubmitTodo }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const title = e.target.title.value;
    const content = e.target.content.value;
    const deadline = e.target.deadline.value;

    onSubmitTodo({
      id: crypto.randomUUID(),
      title,
      content,
      deadline,
      isDone: false,
    });

    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="input-title-content-box">
      <div>
        <input type="text" placeholder=" 제목" name="title" className="title" />
        <input type="text" placeholder=" 내용" name="content" className="content"/>
        <input type="date" name="deadline" className="deadline" />
      </div>
      <button type="submit" className="add-todo-btn">
        제출
      </button>
    </form>
  );
};

export default TodoForm;
