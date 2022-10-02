import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import FilterButtons from './FilterButtons'
import TodoFooter from './TodoFooter'
import TodoItem from './TodoItem'

const TodoContainer = () => {

  const { todos } = useSelector(state => state.todo)

  const [sortedTodos, setSortedTodos] = useState([])
  const [sortType, setSortType] = useState('all')

  useEffect(() => {
    setSortedTodos(todos)
  }, [todos])

  const sortTodos = (type) => {
    if (type === 'all') {
      setSortType('all')
      setSortedTodos(todos)
    }
    if (type === 'active') {
      setSortType('active')
      setSortedTodos(todos.filter(todo => todo.isCompleted === false))
    }
    if (type === 'completed') {
      setSortType('completed')
      setSortedTodos(todos.filter(todo => todo.isCompleted === true))
    }
  }

  return (
    <div
      className=' 
        sm:shadow-2xl 
        sm:dark:shadow-black
        rounded-md 
        dark:text-white
        sm:bg-white sm:dark:bg-very-dark-g-b-dm-2
      '>
      {sortedTodos.length === 0 && <div className='text-center py-10 bg-white dark:bg-very-dark-g-b-dm-2 rounded-t-md'>Create a new todo!</div>}

      {sortedTodos && sortedTodos.map((todo) => <TodoItem key={todo.id} {...todo} />)}

      <TodoFooter sortTodos={sortTodos} sortType={sortType} amount={todos.length}/>

      <FilterButtons 
        sortTodos={sortTodos} 
        sortType={sortType} 
        className='flex rounded-md items-center justify-evenly mt-10 sm:hidden bg-white dark:bg-very-dark-g-b-dm-2 py-5' 
      />
    </div>
  )
}

export default TodoContainer