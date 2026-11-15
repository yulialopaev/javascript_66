import StatusBadge from "./StatusBadge.jsx";

function StudentCard({student}) {

    const statusClass = student.isActive ? "student-card active" : "student-card paused";

    return (
        <div className={statusClass}>
            <div className={"student-info"}>
                <h2>{student.name} </h2>
                <p>Age: {student.age}</p>
                <p>Group: {student.group}</p>
                {student.age < 18 && <p>Несовершеннолетний студент</p>}
            </div>
            <StatusBadge isActive={student.isActive}/>

        </div>
    )
}

export default StudentCard;