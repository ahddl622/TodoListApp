import Header from "./components/layout/Header"
import TodoController from "./components/todo/TodoController"
import styled from "styled-components"

function App() {
  return (
    <div className="todo-container">
      <Header />
      <TodoController />
    </div>
  )
}

export default App