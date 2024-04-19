import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './Header.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p className='bg-slate-300 py-4'>Hello world</p>
    <Header />
    </>
  )
}

export default App
