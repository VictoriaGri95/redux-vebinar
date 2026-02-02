import './App.css'
import {type DecrementAction, type IncrementAction, store} from "./store.ts";
import {useEffect, useReducer} from "react";

function App() {

  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      forceUpdate();
    })
    return unsubscribe;
  }, [])

  return (
    <>

      counter {store.getState().counter}
      <div className="card">

        <button onClick={() => store.dispatch({type: 'increment'} satisfies IncrementAction)}>
          increment
        </button>
        <button onClick={() => store.dispatch({type: 'decrement'} satisfies DecrementAction)}>
          decrement
        </button>

      </div>

    </>
  )
}

export default App
