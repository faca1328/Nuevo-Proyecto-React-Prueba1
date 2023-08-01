import { useState } from "react"

export function useCounter (initialValue = 0) {


    const [counter, setCounter] = useState(initialValue)

    const sum = (value = 1) => {
        setCounter(counter + value)
    }
    
    const res = (value = 1) => {
        setCounter(counter - value)
    }

    const reset = () => {
        setCounter(initialValue)
    }

  return {
    counter,
    sum,
    reset,
    res
  }
}
