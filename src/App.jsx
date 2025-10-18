import { useState } from 'react'
import ScratchCardPage from './ScratchCardPage.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-black">
         <ScratchCardPage/>
      </div>
    </>
  )
}

export default App
