import { useState } from 'react';


function ToDoList() {

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");


    function handleInputChange(event) {
        setNewTask(event.target.value)
    }

    function addTask() {
        if (newTask.trim() !== "") {
            // setTasks(t => [...t, newTask]);
            setTasks(t => [...t, { text: newTask, completed: false }]);
            setNewTask("");
        }
    }

    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    function moveTaskUp(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] =
                [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index) {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] =
                [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function toggleTaskCompletion(index) {
        const updatedTasks = [...tasks];
        updatedTasks[index].completed = !updatedTasks[index].completed;
        setTasks(updatedTasks);
    }



    return (
        <div className='to-do-list'>
            <h1>to do list</h1>

            <div>
                <input type="text"
                    placeholder='enter the text...'
                    value={newTask}
                    onChange={handleInputChange}
                    onKeyDown={(e) => e.key === "Enter" && addTask()} />

                <button
                    className='add-button'
                    onClick={addTask}>
                    Add Task
                </button>
            </div>

            <ol>
                {tasks.map((task, index) =>
                    <li key={index}>

                        {/* <span className='text'>{task}</span> */}
                        <span
                            className='text'
                            style={{
                                textDecoration: task.completed ? "line-through" : "none",
                                color: task.completed ? "gray" : "black"
                            }}
                        >
                            {task.text}
                        </span>

                        <button
                            className='done-button'
                            onClick={() => toggleTaskCompletion(index)}>
                            {task.completed ? "Undo" : "Done"}
                        </button>


                        <button
                            className='delete-button'
                            onClick={() => deleteTask(index)}>
                            Delete
                        </button>

                        <button
                            className='move-button'
                            onClick={() => moveTaskUp(index)}>
                            ⬆️
                        </button>

                        <button
                            className='move-button'
                            onClick={() => moveTaskDown(index)}>
                            ⬇️
                        </button>
                    </li>
                )}
            </ol>

        </div>
    )
}

export default ToDoList;







