function FilterButtons({setFilter}) {
    return (
        <div className="filters">
            <button className="filter-button" onClick={() => setFilter('all')}>All tasks</button>
            <button className="filter-button" onClick={() => setFilter('completed')}>Completed tasks</button>
            <button className="filter-button" onClick={() => setFilter('notCompleted')}>Not completed tasks</button>
        </div>
    )
}

export default FilterButtons;