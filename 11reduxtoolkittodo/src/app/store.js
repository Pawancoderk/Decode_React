import {configureStore} from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice"
export const store = configureStore({
    reducer: todoReducer //! from todoslice name is different because of default export
})