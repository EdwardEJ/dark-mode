import { useState } from 'react'

export const useLocalStorage = (key, initialValue = '') => {
  const [storedValue, setStoredValue] = useState(() => {
    // if (JSON.parse(window.localStorage.getItem(key))) {
    //   return (JSON.parse(window.localStorage.getItem(key)))
    // } else {
    //   window.localStorage.setItem(key, JSON.stringify(initialValue))
    //   return initialValue
    // }

    //retrieve key from local storage
    const item = window.localStorage.getItem(key);
    //if item exists (true), return parsed item
    //otherwise return initialValue
    return item ? JSON.parse(item) : initialValue
  })

  const setValue = (value) => {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  }

  //function above sets 'storedValue'
  //we return 'storedValue'
  return [storedValue, setValue]
}