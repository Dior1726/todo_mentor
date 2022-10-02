import React from 'react'

const FilterButtons = ({sortTodos, className, sortType}) => {
  return (
    <div className={`${className} items-center gap-3 font-bold `}>
      <button 
        className={`${sortType === 'all' ? ' text-primary-blue' : ''}`} 
        onClick={() => sortTodos('all')}
      >
        All
      </button>
      <button 
        className={`${sortType === 'active' ? ' text-primary-blue' : ''}`} 
        onClick={() => sortTodos('active')}
      >
        Active
      </button>
      <button 
        className={`${sortType === 'completed' ? ' text-primary-blue' : ''}`} 
        onClick={() => sortTodos('completed')}
      >
        Completed
      </button>
    </div>
  )
}

export default FilterButtons