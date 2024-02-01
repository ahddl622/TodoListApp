import Header from "./components/layout/Header"
import TodoController from "./components/todo/TodoController"

function App() {
  return (
    <div className="todo-container">
      <Header />
      <TodoController />
    </div>
  )
}

export default App