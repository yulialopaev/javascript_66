import './App.css'
import CourseList from "./components/CourseList.jsx";
import {courses} from "./data/courses.js";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";

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
