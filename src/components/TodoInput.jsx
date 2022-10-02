import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createTodo } from '../features/todo/todoSlice'

const TodoInput = () => {

  const dispatch = useDispatch()
  const [todo, setTodo] = useState('')

  const createTodoHandler = () => {
    const newTodo = {
      id: Math.round(Math.random() * 100000),
      title: todo,
      isCompleted: false
    }
    dispatch(createTodo(newTodo))
    setTodo('')
  }

  return (
    <div className='flex items-center gap-4 bg-white dark:bg-very-dark-g-b-dm-2 py-2 px-4 rounded-md mb-10'>
      <span className='w-8 h-8 rounded-full border border-light-g-b dark:border-dark-g-b-dm'></span>
      <input 
        type="text" 
        className='bg-transparent flex-1 outline-none border-none dark:text-white px-2 py-3' 
        placeholder='Creating a new todo... ' 
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === 'Enter') createTodoHandler() 
        }}
      />
    </div>
  )
}

export default TodoInput