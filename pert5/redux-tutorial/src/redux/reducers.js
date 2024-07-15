const initialState = {
    todos: [],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return {
                ...state,
                todos: [...state.todos, action.payload],
            };
        case "DELETE_TODO":
            return {
                ...state,
                todos: state.todos.filter(
                    (todo, index) => index !== action.payload
                ),
            };
        default:
            return state;
    }
};

export default rootReducer;
