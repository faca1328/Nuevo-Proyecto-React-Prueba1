import { useCounter } from "../Hooks/useCounter"

export function CounterComp ()  {

    const {
        counter,
        sum,
        reset,
        res} = useCounter(0)



  return (
      <>
      <h1>Counter : {counter} </h1>
      <button onClick={() => sum()}> +1</button>
      <button onClick={reset}> Reset </button>
      <button onClick={() => res(3)}> -1</button>
      </>
  )
}
