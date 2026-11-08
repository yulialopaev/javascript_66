import StudentCard from "./StudentCard.jsx";

function StudentList(props) {

    if (props.students.length === 0) {
        return <div className="student-list">No students found</div>;
    }

    return (
        <>
            <p>Наши студенты</p>
            <p>Всего студентов: {props.students.length}</p>
            <div className="student-list">

                {props.students.map((student) => (
                    <StudentCard key={student.id} student={student}/>
                ))}
            </div>
        </>
    )
}

export default StudentList;