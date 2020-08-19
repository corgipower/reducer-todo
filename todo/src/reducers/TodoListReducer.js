export const ADD_TASK = "ADD_TASK";
export const TOGGLE_COMPLETED = "TOGGLE_COMPLETED";

export const initialState = [{
    task: '',
    id: '',
    completed: false, 
}]

export function TodoListReducer(state, action) {
    switch(action.type) {
        case ADD_TASK:
            return {...state, task: action.payload, id: Date.now(), completed: false};
        case TOGGLE_COMPLETED:
            return {...state, completed: !state.completed};
        default:
            return state;
    }
}