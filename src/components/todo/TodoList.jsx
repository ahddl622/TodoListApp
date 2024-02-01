import { TodoItemList } from "../../style/TodoStyle";
import TodoItem from "./TodoItem";

const TodoList = ({ headTitle, todos, onDeleteTodoItem, onToggleTodoItem }) => {
  return (
    <section>
      <h2>{headTitle}</h2>
      <TodoItemList>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDeleteTodoItem={onDeleteTodoItem}
            onToggleTodoItem={onToggleTodoItem}
          />
        ))}
      </TodoItemList>
    </section>
  );
};

export default TodoList;
