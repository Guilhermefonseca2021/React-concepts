import { useState } from 'react'
import { Root } from './App'

function App() {
  // let state3;
  // const [state1] = useState(1);
  // const [isModalOpen, setIsModalOpen] = useState(true);

  const [count, setCount] = useState(1)
  // if(isModalOpen) {
  //   const [state3] = useState(2);
  // }

  function increment() {
    setCount(count + 1)
    setCount(count + 1)
    setCount(count + 1)
    setCount(count + 1)
  }

  return (
    <Root>
      <h1>Hello world</h1>
      {/* {JSON.stringify({ state1, state2, state3 })} */}
      
      <button onClick={increment}>{count}</button>
    </Root>
  )
}

export default App
