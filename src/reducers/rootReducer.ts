import {combineReducers} from "redux";
import counterReducer from "../slices/counterSlice";

export const rootReducer = combineReducers({
    counter: counterReducer
    // TODO: Add More Reducers here
});

export type RootState = ReturnType<typeof rootReducer>;