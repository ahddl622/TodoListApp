import Header from "./components/layout/Header"
import TodoController from "./components/todo/TodoController"
import { TodoBody } from "./style/TodoStyle"


function App() {
  return (
    <TodoBody>
      <Header />
      <TodoController />
    </TodoBody>
  )
}

export default App