const taskInput = document.querySelector('#taskInput');
const addButton = document.querySelector('#add-button');
const taskList = document.querySelector('#taskList');


addButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();

    if(!taskText) {
        console.log('Empty Input');
        return;
    }
    const newTask = document.createElement('li');
    newTask.textContent = taskText;
    newTask.addEventListener('click', () => {
        console.log(`Remove item: ${newTask.textContent}`)
        newTask.remove();
    })


    taskList.append(newTask);
    taskInput.value = '';
    taskInput.focus();

    console.log(taskText)
})




