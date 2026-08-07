import { useEffect, useState } from 'react'
import './App.css'
import { useFetch } from './service'
type TPokemon = {
  name: string
  url: string
}

type Data = {
  results: TPokemon[]
}


function App() {
  const [data, setData] = useState<Data>()

  useEffect(() => {
    useFetch("/pokemon").then((data) => {
      setData(data)
    })
  },[])


  return (
    <>
    {data?.results.map((item) => (
      <>
        <p key={item.url}>{item.name}</p>
      </>
    ))}
    </>
  )
}

export default App
