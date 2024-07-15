import { useRecoilValue } from "recoil";
import TodoItem from "./TodoItem";
import { todoListState } from "../state";

export default function TodoList() {
    const todoList = useRecoilValue(todoListState);

    return (
        <ul>
            {todoList.map((todoItem) => (
                <TodoItem key={todoItem.id} item={todoItem} />
            ))}
        </ul>
    );
}
