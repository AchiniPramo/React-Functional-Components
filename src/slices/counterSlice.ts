//Define the state of the component
export interface CounterState {
    count: number,
    error: string | null
}
export const initialState: CounterState = {
    count: 0,
    error: null
}

//Define the actions managed within the other app
interface CounterActions {
    type: 'increment' | 'decrement'
}

export function counterSlice(state = initialState, action: CounterActions) {
    const {type} = action;
    switch (type) {
        case "increment":
            const newIncrementCount = state.count + 1;
            const hasIncrementError = newIncrementCount > 5;
            return {
                ...state,
                count: hasIncrementError ? state.count : newIncrementCount,
                error: hasIncrementError ? "Maximum value reached" : null
            };
        case "decrement":
            const newDecrementCount = state.count - 1;
            const hasDecrementError = newDecrementCount < 0;
            return {
                ...state,
                count: hasDecrementError ? state.count : newDecrementCount,
                error: hasDecrementError ? "Minimum value reached" : null
            };
        default:
            return state;
    }
}