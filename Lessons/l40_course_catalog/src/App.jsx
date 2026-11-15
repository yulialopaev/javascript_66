import './App.css'
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import CourseList from "./components/CourseList.jsx";
import {courses} from "./data/courses.js";

function App() {


    return (
        <>
            <Header/>
            <CourseList courses={courses}/>
            <Footer/>
        </>
    )
}

export default App
