import { useCallback, useState } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed , setCharAllowed] = useState(false)
  const [password,setPassword ] = useState("") 

  const passwordgenerator = useCallback(fn , [])

  return (
    <>
    <h1 className='text-4xl text-center text-white p-10 '>Password generator</h1>
    </>
  )
}

export default App
