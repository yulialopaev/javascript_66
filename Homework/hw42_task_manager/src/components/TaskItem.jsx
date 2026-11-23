function TaskItem({task, changeStatus, deleteTask}) {
    const taskClass = task.completed ? "task-title completed" : "task-title";

    return (
        <div className="task-item">
            <input type="checkbox" checked={task.completed} onChange={() => changeStatus(task.id)}/>
            <span className={taskClass}>{task.title}</span>
            <button className="delete-button" onClick={() => deleteTask(task.id)}>Delete</button>
        </div>
    )
}

export default TaskItem;


