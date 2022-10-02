import React from 'react'
import { useDispatch } from 'react-redux'
import { changeTheme } from '../features/theme/themeSlice'

const Title = ({darkMode}) => {

  const dispatch = useDispatch()

  return (
    <div className='flex items-center justify-between text-white mb-10'>
      <h1 className='text-4xl font-bold tracking-widest'>TODO</h1>
      <button onClick={() => dispatch(changeTheme())}>
        {
          darkMode ? (<i className="ri-sun-fill text-2xl"></i>) : (<i className="ri-moon-fill text-2xl"></i>)
        }
      </button>
    </div>
  )
}

export default Title