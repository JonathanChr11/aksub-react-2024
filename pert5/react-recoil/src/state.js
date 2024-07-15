import { atom, selector } from "recoil";

export const todoListState = atom({
    key: "todoListState",
    default: [],
});

export const getTodoListState = selector({
    key: "getTodoListState",
    get: ({ get }) => {
        const todoList = get(todoListState);
        const totalItems = todoList.length;
        const totalCompletedItems = todoList.filter(
            (item) => item.isComplete
        ).length;
        const totalUncompletedItems = totalItems - totalCompletedItems;

        return {
            totalItems,
            totalCompletedItems,
            totalUncompletedItems,
        };
    },
});
