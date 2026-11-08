function StatusBadge(props) {

    return (
        <div className={"status-badge"}>
            <span>{props.student.isActive === true? "Активный" : "Пауза"}</span>
        </div>
    )
}

export default StatusBadge;