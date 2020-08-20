export const ADD_TASK = "ADD_TASK";
export const TOGGLE_COMPLETED = "TOGGLE_COMPLETED";
export const REMOVE_COMPLETED = "REMOVE_COMPLETED";

export const initialState = 
    [{
    task: null,
    id: Date.now(),
    completed: false, 
}]

export function TodoListReducer(state, action) {
    switch(action.type) {
        case ADD_TASK:
            return [...state, {task: action.payload, completed: false, id: Date.now()}];
        case TOGGLE_COMPLETED:
            return (
            state.map((item) => {
                if(action.id === item.id) {
                    return {
                        ...item,
                        completed: !item.completed
                    }
                } else {
                    return item;
                }
            }))
        case REMOVE_COMPLETED:
            return (
                state.filter(item => item.completed === false)
                )
        default:
            return state;
    }
}