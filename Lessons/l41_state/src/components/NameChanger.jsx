import {useState} from "react";

function NameChanger() {
    const [name, setName] = useState("Anna")

    function changeName() {
        setName("John")
    }

    return (
        <div>
            <h2>Name: {name}</h2>
            <button onClick={changeName}>Change Name</button>
        </div>
    )
}

export default NameChanger;