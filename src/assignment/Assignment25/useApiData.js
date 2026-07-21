import { useEffect, useState } from "react"

const API_URL = import.meta.env.VITE_API_URL

const useApiData = (resource) => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    const controller = new AbortController()

    const loadData = async () => {
      if (!API_URL) {
        setError("VITE_API_URL is missing from the .env file.")
        setIsLoading(false)
        return
      }

      try {
        setIsLoading(true)
        setError("")
        const response = await fetch(`${API_URL}/${resource}`, {
          signal: controller.signal,
        })

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`)
        }

        setData(await response.json())
      } catch (requestError) {
        if (requestError.name !== "AbortError") {
          setError(requestError.message)
        }
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false)
        }
      }
    }

    loadData()
    return () => controller.abort()
  }, [resource])

  return { data, isLoading, error }
}

export default useApiData
