import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Title from './components/Title';
import TodoContainer from './components/TodoContainer';
import TodoInput from './components/TodoInput';

function App() {

  const { darkMode } = useSelector(state => state.theme)

  useEffect(() => {
    darkMode ? 
        document.documentElement.classList.add('dark') 
      : 
        document.documentElement.classList.remove('dark')
  }, [darkMode])
  
  return (
    <div className='w-full min-h-screen transition-all px-10 bg-very-light-gray dark:bg-very-dark-b-dm relative text-base'>
      
      <div className='w-full absolute left-0 right-0 top-0 z-0 h-[300px] bg-mobile-light dark:bg-mobile-dark sm:bg-desktop-light sm:dark:bg-desktop-dark bg-no-repeat bg-cover'></div>

      <div className='max-w-xl w-full mx-auto relative z-10 py-20 '>
        
        <Title darkMode={darkMode} />

        <TodoInput/>

        <TodoContainer/>

      </div>
    </div>
  );
}

export default App;
