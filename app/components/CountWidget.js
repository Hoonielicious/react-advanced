import React from 'react'

let CountWidget = ({count, handleClick}) => (
    <div>
      <h1>Hello Redux!</h1>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
)

export default CountWidget
