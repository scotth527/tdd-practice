import React from 'react';

export default function Counter() {
    const [counter, setCounter ] = React.useState(0);

    let increment = ()=> {
        setCounter(counter + 1);
    }

    let decrement = ()=> {
        if (counter > 0) {
            setCounter(counter - 1);
        }
    }

    return (
        <div >
            <h1>This is counter app</h1>
            <div id='counter-value'>{counter}</div>
            <button onClick={increment} id="increment-btn">Increment</button>
            <button onClick={decrement} id="decrement-btn">Decrement</button>
        </div>
    );
}