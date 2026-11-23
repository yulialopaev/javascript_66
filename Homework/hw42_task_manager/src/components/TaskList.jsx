import TaskItem from "./TaskItem.jsx";

function TaskList({visibleTasks, hasNoTasks, deleteTask, changeStatus}) {

    if (hasNoTasks) {
        return <p>No tasks</p>
    }


    return (
        <div className={"task-list"}>
            {visibleTasks.length === 0 ? <p>No matching tasks</p> :
                visibleTasks.map(task =>
                    <TaskItem key={task.id}
                              task={task}
                              deleteTask={deleteTask}
                              changeStatus={changeStatus}/>
                )}
        </div>
    )
}

export default TaskList;

// Получать задачи через props.
// Использовать map().
// Использовать key.
// Передавать обработчики в TaskItem.
// Показывать сообщение при пустом списке.