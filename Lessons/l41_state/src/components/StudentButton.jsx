function StudentButton() {

    function showStudent(name) {
        console.log(`Student ${name}`);
    }

    return (
        <div>
            <button onClick={() => showStudent("Anna")}>Show Student</button>
        </div>

    )
}

export default StudentButton;

// стрелочная функция удобна когда в функцию надо передать параметры