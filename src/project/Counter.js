import React, { useState } from 'react';
import './Counter.css'

function Counter() {
    const [ count, setCount ] = useState(0)

    const handleClick = () => {
    
        setCount( count + 1)
      }
    
      const handleClickMinus = () => {
        setCount( count - 1 )
      }

      const handleReset = () => {
        setCount(0)
      }



  return (
      <div className='counter'>
        <h1>React Counter</h1>
            <span className='counter__output'>Count: {count } </span>
            <div className="btn__container">
            <button className='control__btn'  onClick={handleClick}>+</button>
            <button className='control__btn' onClick={handleClickMinus}>-</button>
            <button className='reset' onClick={handleReset}>rest</button>

            </div>
    </div>
  )
}

export default Counter