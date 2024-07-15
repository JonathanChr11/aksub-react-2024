import { useRecoilValue } from "recoil";
import { getTodoListState } from "../state";

export default function TodoStatus() {
    const { totalItems, totalCompletedItems, totalUncompletedItems } =
        useRecoilValue(getTodoListState);
        
    return (
        <div>
            <li>Total Items: {totalItems}</li>
            <li>Items Completed: {totalCompletedItems}</li>
            <li>Items Not Complete: {totalUncompletedItems}</li>
        </div>
    );
}
