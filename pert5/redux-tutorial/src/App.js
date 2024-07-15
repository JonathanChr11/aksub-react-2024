import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { useState } from "react";
import { addTodoList, deleteTodoList } from "./redux/actions";

function App() {
    const [inputValue, setInputValue] = useState("");
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    const handleAddTodo = () => {
        if (inputValue.trim()) {
            dispatch(
                addTodoList({
                    text: inputValue,
                    isComplete: false,
                })
            );
            setInputValue("");
        }
    };

    const handleDeleteTodo = (index) => {
        dispatch(deleteTodoList(index));
    };

    return (
        <div className="App">
            <h1>Redux Todo List</h1>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={handleAddTodo}>Add Todo List</button>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        {todo.text}
                        <button onClick={() => handleDeleteTodo(index)}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
