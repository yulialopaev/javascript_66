import StudentCard from "./StudentCard.jsx";

function StudentList({students}) {

    return (
        <>
            <p>Наши студенты</p>
            <p>Всего студентов: {students.length}</p>
            <div className="student-list">
                {students.length === 0
                    ? <p>No students found</p>
                    : students.map((student) => (
                        <StudentCard key={student.id} student={student}/>
                    ))}
            </div>

        </>
    )
}

export default StudentList;