import { useState } from 'react'
import Die from "./die"
import "./App.css"

const faces = ["one", "two", "three", "four", "five", "six"]

function App() {
  const [numbers, setNumbers] = useState([null, null]);

  const shuffle = () => {
    const randomNumbers = numbers.map(() => Math.floor(Math.random() * faces.length + 1))
    setNumbers(randomNumbers)
  }

  return (
    <div className='game'>
      <div className='dices'>
        {numbers.map((number) => (
          <Die
            face={number !== null ? faces[number - 1] : 'default'}
            number={number}
          />
        ))}
      </div>
      <h1>Roll the dice !</h1>
      <button onClick={shuffle}>Roll</button>
    </div>
  )
}

export default App


