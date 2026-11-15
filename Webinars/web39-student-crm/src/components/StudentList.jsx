import StudentCard from "./StudentCard.jsx";

function StudentList({students}) {
    return (
        <section>
            <h2>Our students</h2>
            <p>Number of students: {students.length}</p>
            {students.length === 0
                ? <p>No students</p>
                : students.map(student => (
                    <StudentCard key={student.id} student={student}/>
                ))}

        </section>
    )
}

export default StudentList;