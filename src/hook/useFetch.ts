import {useCallback, useEffect, useState} from 'react'

interface Option<T> {
  initialData?: T | undefined
  params?: any
}

export function useFetch<T>(fetcher: Function, option?: Option<T>) {
  const [reloadId, setReload] = useState(new Date().getTime())
  const [data, setData] = useState<T | undefined>(option?.initialData)
  const [isLoading, setLoading] = useState<boolean>(!!option?.params)
  const [error, setError] = useState<string>('')

  const reload = useCallback(() => {
    setReload(new Date().getTime())
  }, [])

  useEffect(() => {
    async function getData() {
      if (option?.params === false) {
        return
      }
      try {
        let data
        setLoading(true)
        if (option?.params) {
          data = await fetcher(option.params)
        } else {
          data = await fetcher()
        }
        //@ts-ignore
        setData(data.data)
      } catch (error) {
        setError(error as string)
      } finally {
        setLoading(false)
      }
    }
    getData()
  }, [option?.params, reloadId])

  return {
    isLoading,
    error,
    data,
    reload,
    setData,
  }
}
