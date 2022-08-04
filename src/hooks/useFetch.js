import { useState, useEffect } from 'react'

// custom hook

export const useFetch = url => {
  const [data, setData] = useState(null)

  // refatorando POST

  const [config, setConfig] = useState('')
  const [method, setMethod] = useState('')
  const [callFetch, setCallFetch] = useState('')

  // loading

  // tratando erros

  const [error, setError] = useState(null)

  const [loading, setLoading] = useState(false)

  const httpConfig = (data, method) => {
    if (method === 'POST') {
      setConfig({
        method,
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })

      setMethod(method)
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)

      try {
        const res = await fetch(url)

        const json = await res.json()
        
        setData(json)
      } catch (error) {
        setError('Houve um erro ao carregar os dados')
      }

      setLoading(false)
    }

    fetchData()
  }, [url, callFetch])

  // refatorando POST

  useEffect(() => {
    const httpRequest = async () => {
      if (method === 'POST') {

        const res = await fetch(url, config)

        const json = await res.json()

        setCallFetch(json)
      }
    }
    
    httpRequest()
  }, [config, method, url])

  return { data, httpConfig, loading, error, callFetch }
}