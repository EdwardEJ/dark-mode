import { useEffect } from 'react'
import { useLocalStorage } from './useLocalStorage'

export const useDarkMode = (key, initialValue) => {
  const [value, setValue] = useLocalStorage(key, initialValue)

  useEffect(() => {
    value ? document.body.classList.toggle('dark-mode') : document.body.classList.toggle('dark-mode')
  }, [value])


  return [value, setValue]
}