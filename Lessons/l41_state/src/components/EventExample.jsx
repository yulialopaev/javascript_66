function EventExample() {
    function handleClick(event) {
        console.log(`Тип события: ${event.type}`);
        console.log(`Элемент currentTarget: ${event.currentTarget}`)
        console.log(`Элемент target: ${event.target}`)
    }

    return (
        <div>
            <button onClick={handleClick}>Press <span>Event</span></button>
        </div>
    )
}

export default EventExample;

// event.type - тип события.
// event.currentTarget - элемент, к которому привязан обработчик.
// event.target - элемент, на котором произошло событие.