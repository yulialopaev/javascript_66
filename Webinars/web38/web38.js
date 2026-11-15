const root = ReactDOM.createRoot(document.getElementById('root'));

// const studentName = "Otto";
// const studentAge = 29;

const student = {
    name: "Otto",
    age: 29,
    course: "Frontend Development"
};

const student1 = {
    name: "John",
    age: 17,
    course: "Frontend Development"
};

const student2 = {
    name: "Sara",
    age: 22,
    course: "Software Development"
};

function Student(props) {
    return (
        <div className="student-card">
            <p>Name: {props.student.name}</p>
            <p>Age: {props.student.age}</p>
            <p>Status: {props.student.age >= 18 ? "Adult" : "Teen"}</p>
            <p>Course: {props.student.course}</p>
        </div>
    )
}


root.render(
    <div>
        <h1 style={{color: "darkblue", fontSize: "48px"}}>Information about students</h1>
        <Student student={student}/>
        <Student student={student1}/>
        <Student student={student2}/>
    </div>
);


// <div className="student-card">
//     <p>Name: {student.name.toUpperCase()}</p>
//     <p>Age: {student.age + 1}</p>
//     <p>Status: {student.age >= 18 ? "Adult" : "Teen"}</p>
//     <p>Course: {student.course}</p>
// </div>

console.log(root)