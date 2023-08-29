import { useState } from "react";

function ThucHanh4() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    const addTask = () => {
        setTasks([...tasks, newTask]);
        setNewTask('');
    }

    const handleChange = (event) => {
        setNewTask(event.target.value);
    }

    return (
        <div>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </ul>
            <input type="text" value={newTask} onChange={handleChange} />
            <button onClick={addTask}>Add Task</button>
        </div>
    );
}

export default ThucHanh4;