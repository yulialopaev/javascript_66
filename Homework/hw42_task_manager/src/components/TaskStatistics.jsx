function TasksStatistics({totalTasks, completedTasks, notCompletedTasks}) {

    return (
        <div className="stats">
            <p>Total tasks: {totalTasks}</p>
            <p>Completed: {completedTasks}</p>
            <p>Not completed: {notCompletedTasks}</p>
        </div>
    )
}

export default TasksStatistics;