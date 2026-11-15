import App from "../App.jsx";
import StatusBadge from "./StatusBadge.jsx";

function StudentCard({student}) {

    const cardClass = student.isActive
    ? "student-card student-card-active"
        : "student-card student-card-paused";

    return (
        <article className={cardClass}>
            <h2>{student.name}</h2>
            <p>Age: {student.age}</p>
            <p>Group: {student.group}</p>
            <StatusBadge isActive={student.isActive} />
            {student.age < 18 && <p>Teenager</p>}
        </article>
    )

}

export default StudentCard;