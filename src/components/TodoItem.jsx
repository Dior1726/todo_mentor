import React from 'react'
import { useDispatch } from 'react-redux'
import { completeTodo, removeTodo } from '../features/todo/todoSlice'

const TodoItem = ({id, isCompleted, title}) => {

  const dispatch = useDispatch()

  return (
    <div 
      className='group py-3 px-4 flex items-center gap-5 border-b border-very-light-g-b dark:border-very-dark-g-b-dm-1 last:border-none bg-white dark:bg-very-dark-g-b-dm-2 first:rounded-t-md'
    >
      <div 
        className={
          `w-8 h-8 flex items-center justify-center rounded-full border border-light-g-b dark:border-dark-g-b-dm 
            ${isCompleted ? 'bg-gradient-to-br from-from-color to-to-color text-white' : ''}`
        }
        onClick={() => dispatch(completeTodo(id))}
      >
        {isCompleted && <i className="ri-check-double-line"></i>}
      </div>
      <div className={`flex-1 font-bold flex items-center text-very-dark-g-b dark:text-light-g-b-dm justify-between`}>
        <div className={`${isCompleted ? 'line-through text-light-g-b dark:text-dark-g-b-dm' : ''}`}>
          {title}
        </div>
        <button onClick={() => dispatch(removeTodo(id))}>
          <i 
            className="hidden group-hover:block ri-close-line text-xl text-dark-g-b"></i>
        </button>
      </div>
    </div>
  )
}

export default TodoItem