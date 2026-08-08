import { useEffect, useState } from 'react'
import './App.css'
import { useFetch } from './service'
import CardComponent from './components/card'
import type { Data } from './types'

function App() {
  const [data, setData] = useState<Data>()
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState("")
  const [pagination, setPagination] = useState({
    limit: 20,
    offset: 0
  })

  const buttonPagination = (data: string) => {
    let offsetData = 0 

    if (data) {
      const uri = new URL(data)
      offsetData = parseInt(uri.searchParams.get("offset") || '0')
      setPagination({
        ...pagination,
        offset: offsetData
      })
    }
  }

  useEffect(() => {
    try {
      const queryParams = new URLSearchParams({
        limit: pagination.limit.toString(),
        offset: pagination.offset.toString()
      })

      setLoading(true)
      useFetch("/pokemon?"+queryParams.toString()).then((data) => {
        setData(data)
        setError("")
        setLoading(false)
      }).catch(() => {
        setError("Oops! Failed to fetch Pokémon.")
      }).finally(() => {
        setLoading(false)
      })
    } catch (error) {
      setLoading(false)
      setError("Oops! Failed to fetch Pokémon.")
    }
  },[pagination])

  if (loading) {
    return (
      <p>Loading...</p>
    )
  }

  if (error) {
    return (
      <p>{error}</p>
    )
  }

  if(data?.results.length == 0) {
    return (
      <p>No Pokémon Found</p>
    )
  }

  return (
    <div>
      <div className='container'>
        {data?.results.map((item) => (
          <CardComponent name={item.name} url={item.url} key={item.url} />
        ))}
      </div>
      <div className='button-container'>
        <button disabled={data?.previous == null} onClick={() => buttonPagination(data?.previous || '')}>
          Prev
        </button>
        <button disabled={data?.next == null} onClick={() => buttonPagination(data?.next || '')}>
          Next
        </button>
      </div>
    </div>
  )
}

export default App
