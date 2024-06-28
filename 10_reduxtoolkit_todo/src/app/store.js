import { configureStore } from "@reduxjs/toolkit";
import todoRecucer from "../features/todo/todoSlice";

export const store = configureStore({
  reducer: todoRecucer,
});
