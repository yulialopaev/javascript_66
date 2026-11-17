function Counter() {

    let count = 0;

    function increment() {
        count++;
        console.log(`Новое значение: ${count}`)
    }

    return (
        <div>
            <h2>Счётчик: {count}</h2>
            <button onClick={increment}>Увеличить</button>
        </div>
    )
}

export default Counter;