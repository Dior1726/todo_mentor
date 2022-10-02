import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: []
}

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    createTodo(state, action) {
      state.todos.push(action.payload)
    },
    completeTodo(state, action) {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            isCompleted: !todo.isCompleted
          }
        }
        return todo
      })
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload)
    },
    clearCompleted(state) {
      state.todos = state.todos.filter(todo => todo.isCompleted !== true)
    }
  }
})


export const { createTodo, removeTodo, completeTodo, clearCompleted } = todoSlice.actions
export default todoSlice.reducer