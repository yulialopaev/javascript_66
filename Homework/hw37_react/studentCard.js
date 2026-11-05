const root = ReactDOM.createRoot(document.getElementById('root'));

const totalLessons = 110;

const student = {
    firstName: "Harry",
    secondName: "Potter",
    age: 17,
    city: "Godric's Hollow",
    course: "Defence Against the Dark Arts",
    completedLessons: 45,
    image: "./images/garri-potter.jpg"
}

const student2 = {
    firstName: "Hermione",
    secondName: "Granger",
    age: 16,
    city: "London",
    course: "Transfiguration",
    completedLessons: 89,
    image: "./images/germiona-greindzher.jpg"
}

const student3 = {
    firstName: "Ron",
    secondName: "Weasley",
    age: 18,
    city: "Ottery St. Catchpole",
    course: "Charms",
    completedLessons: 16,
    image: "./images/ron.jpg"
}

const students = [student, student2, student3];

function StudentCard(props) {
    return (
        <div className={"student-card"}>
            <p className={"student-title"}>{props.student.firstName} {props.student.secondName}</p>
            <p className={"student-description"}>Age: {props.student.age}</p>
            <p className={"student-description"}>City: {props.student.city}</p>
            <p className={"student-description"}>Course: {props.student.course}</p>
            <p className={"student-description"}>Completed lessons: {props.student.completedLessons}</p>
            <p className={"student-description"}>Remaining lessons: {totalLessons - props.student.completedLessons}</p>
            <img className={"student-image"} src={props.student.image}
                 alt={props.student.firstName + " " + props.student.secondName}/>
        </div>
    )
}

root.render(
    <div id={"container"}>
        <h1>Hogwarts Student Registry</h1>
        <div className={"student-container"}>
            {students.map(student => (
                <StudentCard student={student}/>
            ))}
        </div>
    </div>
);