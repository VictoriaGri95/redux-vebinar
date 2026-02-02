import './App.css'
import {
  type CounterId,
  type DecrementAction,
  type IncrementAction,
  store
} from "./store.ts";
import {useEffect, useReducer} from "react";

function App() {
return (
  <>
    <Counter counterId={'1'}/>
    <Counter counterId={'2'}/>
  </>
  )

}

export function Counter ({counterId} : {counterId: CounterId}){
  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      forceUpdate();
    })
    return unsubscribe;
  }, [])


  return (
    <>

      counter {store.getState().counters[counterId]?.counter}
      <div className="card">

        <button onClick={() => store.dispatch({type: 'increment', payload: {counterId}} satisfies IncrementAction)}>
          increment
        </button>
        <button onClick={() => store.dispatch({type: 'decrement', payload: {counterId}} satisfies DecrementAction)}>
          decrement
        </button>

      </div>

    </>
  )
}

export default App
