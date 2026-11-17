import {useState} from "react";

function StudentInfo() {

    const [student, setStudent] = useState({name: "John", age: 20, group: "React Basics"});

    function increaseAge() {
        // setStudent({name: student.name, age: (student.age + 1), group: student.group})
        setStudent(prevStudent => ({
            ...prevStudent, age: prevStudent.age + 1
        }))
    }

    return (
        <div>
            <h2>{student.name}</h2>
            <p>Age: {student.age}</p>
            <p>Group: {student.group}</p>
            <button onClick={increaseAge}>Increase age</button>
        </div>
    )
}

export default StudentInfo;