import counterReducer from "../slices/counterSlice";
import {configureStore} from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        counter: counterReducer
    }
});

export  type CounterState = ReturnType<typeof counterReducer>