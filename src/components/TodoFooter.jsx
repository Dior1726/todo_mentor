import React from 'react'
import { useDispatch } from 'react-redux'
import { clearCompleted } from '../features/todo/todoSlice'
import FilterButtons from './FilterButtons'

const TodoFooter = ({ sortTodos, amount, sortType }) => {

  const dispatch = useDispatch()

  return (
    <div className='py-3 px-4 flex items-center justify-between text-dark-g-b border-t border-very-light-g-b dark:border-very-dark-g-b-dm-1 flex-wrap gap-4 bg-white dark:bg-very-dark-g-b-dm-2 rounded-b-md'>
      <div>
        {amount} items left
      </div>

      <FilterButtons sortType={sortType} sortTodos={sortTodos} className='hidden sm:flex'/>

      <div>
        <button
          onClick={() => {
            dispatch(clearCompleted())
            sortTodos('all')
          }}
        >Clear Completed</button>
      </div>
    </div>
  )
}

export default TodoFooter