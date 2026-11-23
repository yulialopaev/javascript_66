import './App.css'
import TaskList from "./components/TaskList.jsx";
import {initialTasks} from "./data/initialTasks.js";
import {useState} from "react";
import TasksStatistics from "./components/TaskStatistics.jsx";
import AddTask from "./components/AddTask.jsx";
import FilterButtons from "./components/FilterButtons.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

function App() {
    const [tasks, setTasks] = useState(initialTasks);
    const [addMessage, setAddMessage] = useState('');
    const [taskTitle, setTaskTitle] = useState('');
    const [filter, setFilter] = useState('all');

    function addTask(title) {
        const trimmedTitle = title.trim()

        if (!trimmedTitle) {
            setAddMessage("Please enter a task")
            return
        }

        const newTask = {
            id: crypto.randomUUID(),
            title: trimmedTitle,
            completed: false
        }

        if (tasks.some(task => task.title === newTask.title)) {
            setAddMessage("Task with this title already exists")
            return
        }

        const newTasks = [...tasks, newTask]
        setTasks(newTasks);
        setTaskTitle('')
        setAddMessage('')
    }

    function deleteTask(id) {
        const filteredTasks = tasks.filter(task => task.id !== id);
        setTasks(filteredTasks);
        setAddMessage('');
    }

    function changeStatus(id) {
        setTasks(tasks.map(task => task.id === id ? {...task, completed: !task.completed} : task))
    }

    function deleteCompletedTasks() {
        const notCompletedTasks = tasks.filter(task => !task.completed);
        setTasks(notCompletedTasks);
        setAddMessage('');
    }

    function clearTaskList() {
        setTasks([]);
        setAddMessage('');
    }

    function getStatistics() {
        const totalTasks = tasks.length;
        const completedTasks = tasks.filter(task => task.completed).length;
        const notCompletedTasks = totalTasks - completedTasks;
        return (
            <TasksStatistics totalTasks={totalTasks} completedTasks={completedTasks}
                             notCompletedTasks={notCompletedTasks}/>
        )
    }

    function getFilteredTasks() {
        return tasks.filter(task => {
            if (filter === 'completed') return task.completed;
            if (filter === 'notCompleted') return !task.completed;
            return true;
        })
    }

    const visibleTasks = getFilteredTasks();
    const hasNoTasks = tasks.length === 0;

    return (
        <div className="app">
            <Header/>
            <div>{getStatistics()}</div>
            <AddTask addTask={addTask} taskTitle={taskTitle} setTaskTitle={setTaskTitle} addMessage={addMessage}/>
            <FilterButtons setFilter={setFilter}/>
            <TaskList visibleTasks={visibleTasks} hasNoTasks={hasNoTasks} deleteTask={deleteTask}
                      changeStatus={changeStatus}/>
            <button className="delete-button" onClick={deleteCompletedTasks}>Delete completed task</button>
            <button className="delete-button" onClick={clearTaskList}>Clear task list</button>
            <Footer/>
        </div>
    )
}

export default App;
