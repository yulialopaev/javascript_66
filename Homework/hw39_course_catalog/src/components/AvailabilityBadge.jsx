function AvailabilityBadge({isAvailable}) {

    const availableClass = isAvailable ? "badge available" : "badge closed";

    return (

            <span className={availableClass}>{isAvailable ? "Available" : "Closed"}</span>

    );
}

export default AvailabilityBadge;
