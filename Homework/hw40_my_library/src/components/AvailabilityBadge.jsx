function AvailabilityBadge({copies}) {
    const badgeClass = copies > 0 ? "badge available" : "badge unavailable"

    return (
        <span className={badgeClass}>
            {copies > 0 ? "Доступна" : "Нет в наличии"}
        </span>
    )
}

export default AvailabilityBadge;