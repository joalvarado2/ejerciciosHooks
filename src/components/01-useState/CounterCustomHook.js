import React from 'react'
import { useCounter } from '../../hooks/useCounter'

const CounterCustomHook = () => {

    const {state, increment, decrement, reset} = useCounter(500)
    return (
        <div>
            <h1>Counter with Hook {state}</h1>
            <hr/>

            <button className="btn btn-danger" onClick={() =>increment(2)}>+1</button>
            <button className="btn btn-danger" onClick={reset}>reset</button>
            <button className="btn btn-danger" onClick={() =>decrement(2)}>-1</button>
        </div>
    )
}

export default CounterCustomHook
