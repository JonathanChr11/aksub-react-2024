import { useRecoilState } from "recoil";
import { todoListState } from "../state";

export default function TodoItem({ item }) {
    const [todoList, setTodoList] = useRecoilState(todoListState);
    console.log(todoList);

    const index = todoList.findIndex((listItem) => listItem === item);

    const editTodoList = ({ target: { value } }) => {
        const newList = replaceListAtIndex(todoList, index, {
            ...item,
            text: value,
        });

        setTodoList(newList);
    };

    const completitionToggle = () => {
        const newList = replaceListAtIndex(todoList, index, {
            ...item,
            isComplete: !item.isComplete,
        });

        setTodoList(newList);
    };

    const deleteTodoList = () => {
        const newList = deleteListAtIndex(todoList, index);

        setTodoList(newList);
    };

    return (
        <li>
            <input type="text" value={item.text} onChange={editTodoList} />
            <input type="checkbox" onClick={completitionToggle} />
            <button onClick={deleteTodoList}>Delete</button>
        </li>
    );
}

function replaceListAtIndex(arr, index, newValue) {
    return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

function deleteListAtIndex(arr, index) {
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
}
