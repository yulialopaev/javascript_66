function StatusBadge({isActive}) {
    return (
        <p>
            Status: {isActive ? 'Active' : 'Paused'}
        </p>
    )
}

export default StatusBadge;