import './App.css'
import {students} from './data/students.js';
import StudentList from "./components/StudentList.jsx";


function App() {

    return (
        <>
            <h1>Student CRM</h1>
            <StudentList students={[]} />

        </>
    )
}

export default App
