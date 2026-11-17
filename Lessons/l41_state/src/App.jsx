import './App.css'
import Counter from "./components/Counter.jsx";
import HelloButton from "./components/HelloButton.jsx";
import StudentButton from "./components/StudentButton.jsx";
import EventExample from "./components/EventExample.jsx";
import CounterState from "./components/CounterState.jsx";
import NameChanger from "./components/NameChanger.jsx";
import LightSwitch from "./components/LightSwitch.jsx";
import StudentInfo from "./components/StudentInfo.jsx";

function App() {


    return (
        <>
            <Counter/>
            <HelloButton/>
            <StudentButton/>
            <EventExample/>
            <CounterState/>
            <NameChanger/>
            <LightSwitch/>
            <StudentInfo/>
        </>
    )
}

export default App;
