import './App.css'
import Header from "./components/Header.jsx";
import StudentList from "./components/StudentList.jsx";
import {students} from "./data/students.js";
import Footer from "./components/Footer.jsx";

function App() {


    return (
        <>
            <Header/>
            <StudentList students={students}/>
            <Footer/>
        </>
    )
}

export default App
