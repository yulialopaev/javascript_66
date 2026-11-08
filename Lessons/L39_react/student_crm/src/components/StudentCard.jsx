import StatusBadge from "./StatusBadge.jsx";

function StudentCard(props) {

    return (
        <div className={"student-card"}>
            <div className={"student-info"}>
                <h2>{props.student.name} </h2>
                <p>Age: {props.student.age}</p>
                <p>Group: {props.student.group}</p>
                {props.student.age < 18 ? <p>Несовершеннолетний студент</p> : ""}
            </div>
            <StatusBadge student={props.student}/>

        </div>
    )
}

export default StudentCard;