function HelloButton() {

    function sayHello() {
        console.log('Hello, React')
    }

    return (
        <div>
            {/*<button onClick={sayHello}> Press me</button>*/}
            <button onClick={() => console.log('Hello, React')}> Press me</button>
        </div>
    )
}

export default HelloButton;

