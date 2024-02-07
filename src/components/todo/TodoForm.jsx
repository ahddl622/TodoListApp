import { useContext } from "react";
import { AddTodoBtn, TodoInput, TodoInputBox } from "../../style/TodoStyle";
import { TodoContext } from "../../context/TodoContext";

const TodoForm = () => {
  const { onSubmitTodo } = useContext(TodoContext)
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
    <TodoInputBox onSubmit={handleSubmit} className="input-title-content-box">
      <div>
        <TodoInput type="text" placeholder=" 제목" name="title" />
        <TodoInput $inputWidth="30rem" type="text" placeholder=" 내용" name="content"/>
        <TodoInput $inputWidth="7rem"type="date" name="deadline" />
      </div>
      <AddTodoBtn type="submit" className="add-todo-btn">
        제출
      </AddTodoBtn>
    </TodoInputBox>
  );
};

export default TodoForm;
