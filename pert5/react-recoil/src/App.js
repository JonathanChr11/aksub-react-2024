import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoStatus from "./components/TodoStatus";

function App() {
    return (
        <div className="App">
            <h1>Recoil Todo List</h1>
            <TodoInput />
            <TodoList />
            <TodoStatus />
        </div>
    );
}

export default App;
