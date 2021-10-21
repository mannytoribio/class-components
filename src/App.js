import { useState } from "react"
import Counter2 from "./components/counter2"
import './App.css'


function App() {
  const [showCount, setShowCount] = useState(true)
  return (
    <div className="App">
      <button onClick={() => setShowCount(!showCount)}>SHOW/HIDE</button>
      {/* {showCount && <Counter name="Manny" />} */}
      {showCount && <Counter2 name="Manny" />}
    </div>
  )
}

export default App
