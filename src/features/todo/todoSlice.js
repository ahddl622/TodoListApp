import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createTodo,
  deleteTodo,
  getTodos,
  updateTodo,
} from "../../api/todo-api";

export const getTodosThunk = createAsyncThunk("todo/getTodos", getTodos);
export const createTodosThunk = createAsyncThunk("todo/createTodo", createTodo);
export const deleteTodosThunk = createAsyncThunk("todo/deleteTodo", deleteTodo);
export const updateTodosThunk = createAsyncThunk("todo/updateTodo", updateTodo);

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
  },

  extraReducers: (builder) => {
    builder.addCase(getTodosThunk.fulfilled, (state, action) => {
      state.todos = action.payload;
    });

    builder.addCase(createTodosThunk.fulfilled, (state, action) => {
      state.todos.push(action.payload);
    });

    builder.addCase(deleteTodosThunk.fulfilled, (state, action) => {
      const targetIndex = state.todos.findIndex(
        (todo) => todo.id === action.payload
      );

      state.todos.splice(targetIndex, 1);
    });

    builder.addCase(updateTodosThunk.fulfilled, (state, action) => {
      const targetItem = state.todos.find((todo) => todo.id === action.payload);
      targetItem.isDone = !targetItem.isDone;
    });
  },
});

export default todoSlice.reducer;
