import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyTable from './Table'
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
       <MyTable/>
      </div>
    </>
  )
}

export default App;
