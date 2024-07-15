import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "../state";

export default function TodoInput() {
    const [inputValue, setInputValue] = useState("");
    const setTodoList = useSetRecoilState(todoListState);

    const addTodoList = () => {
        setTodoList((oldTodoList) => [
            ...oldTodoList,
            {
                id: getId(),
                text: inputValue,
                isComplete: false,
            },
        ]);
        setInputValue("");
    };

    const onChange = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <div>
            <input type="text" value={inputValue} onChange={onChange} />
            <button onClick={addTodoList}>Add</button>
        </div>
    );
}

let id = 0;

function getId() {
    return id++;
}
