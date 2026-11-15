function StatusBadge({isActive}) {

    const statusClass = isActive ? "active-status" : "paused-status";
    return (
        <div className={"status-badge"}>
            <span className={statusClass}>{isActive === true ? "Активный" : "Пауза"}</span>
        </div>
    )
}

export default StatusBadge;