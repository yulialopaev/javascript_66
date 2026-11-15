function AvailabilityBadge({isAvailable}) {
    return (
        <span className={isAvailable ? "availability available" : "availability closed"}>
            {isAvailable ? "Available" : "Closed"}
        </span>
    )
}

export default AvailabilityBadge;