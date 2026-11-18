import {useState} from "react";


function StudentList() {
    const [value, setValue] = useState("");
    const [students, setStudents] = useState([
        {
            id: crypto.randomUUID(),
            name: "Anna Black"
        },
        {
            id: crypto.randomUUID(),
            name: "David Packman"
        }
    ]);

    function addStudent(name) {
        const trimmedName = name.trim();
        if (!trimmedName) return;

        const newStudent = {
            id: crypto.randomUUID(),
            name: trimmedName
        }

        const newStudents = [...students, newStudent];
        setStudents(newStudents);
    }

    function deleteStudent(id) {
        const newStudents = students.filter(student => student.id !== id);
        setStudents(newStudents);
    }


    return (
        <div className={"student-list"}>
            <div className={"add-row"}>
                <input type="text" placeholder="Enter student's full name"
                       value={value}
                       onChange={(e) => {
                           setValue(e.target.value)
                       }}
                       onKeyDown={(e) => {
                           if (e.key === "Enter") {
                               addStudent(value);
                               setValue("");
                           }
                       }}/>
                <button className={"add"} onClick={() => {
                    addStudent(value)
                    setValue("")
                }}>Add student
                </button>
            </div>
            <div className={"list"}>
                {students.map((student) => (
                    <p key={student.id}>
                        {student.name}
                        <button className={"delete"} onClick={() => deleteStudent(student.id)}>Delete</button>
                    </p>
                ))}
            </div>
        </div>
    )
}

export default StudentList;