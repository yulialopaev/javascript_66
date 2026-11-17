import {useState} from "react";

function CounterState() {
    let initValue = 0;

    const [count, setCount] = useState(initValue);

    // состояние и setter - функция, которая устанавливает значение

    function increment() {
        setCount(count + 1);
    }

    function decrement() {

        setCount(count <= 0 ? 0 : count - 1);
    }

    function reset() {
        setCount(initValue);
    }

    function set100() {
        setCount(100);
    }

    function increment3Times() {
        // setCount(count + 1);
        // setCount(count + 1);
        // setCount(count + 1);
        // сработает только 1 раз
        setCount(prevState => prevState + 1);
        setCount(prevState => prevState + 1);
        setCount(prevState => prevState + 1);
    }

    return (
        <>
            <div>
                <h2>Счётчик: {count}</h2>
                <button onClick={decrement}>-</button>
                <button onClick={reset}>reset</button>
                <button onClick={increment}>+</button>
                <button onClick={set100}>Set 100</button>
                <button onClick={increment3Times}>Increment 3 Times</button>
            </div>
        </>
    );
}

export default CounterState;