import TodoProvider from "./context/TodoContext";
import { Provider } from "react-redux";
import Router from "./shared/Router";
import store from "./app/store";

const App = () => {
  return (
    <Provider store={store}>
      <TodoProvider>
        <Router />
      </TodoProvider>
    </Provider>
  );
};

export default App;
