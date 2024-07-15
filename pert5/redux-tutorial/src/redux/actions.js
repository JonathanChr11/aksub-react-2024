export const addTodoList = (todo) => ({
    type: 'ADD_TODO',
    payload: todo
})

export const deleteTodoList = (index) => ({
    type: 'DELETE_TODO',
    payload: index
})