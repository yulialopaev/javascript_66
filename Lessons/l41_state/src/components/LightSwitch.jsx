import {useState} from "react";

function LightSwitch() {
    const [isOn, setIsOn] = useState(false)

    function toggleLight() {
        setIsOn(prevState => !prevState)
    }


    return (
        <div>
            <h2>Light: {isOn ? "On" : "Off"}</h2>
            <button onClick={toggleLight}>Turn {isOn ? "Off" : "On"}</button>
        </div>
    )
}

export default LightSwitch;