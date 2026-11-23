function AddTask({addTask, taskTitle, setTaskTitle, addMessage}) {

    return (
        <div className="add-task">
            <form onSubmit={(e) => {
                e.preventDefault();
                addTask(taskTitle);
            }}>
                <input type="text" placeholder="Enter task" value={taskTitle}
                       onChange={(e) => {setTaskTitle(e.target.value)}}/>
                <button className="add-button" type="submit">Add Task</button>
            </form>
            <p className="add-message">{addMessage}</p>
        </div>
    )
}

export default AddTask;