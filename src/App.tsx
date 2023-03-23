import React, {useState} from 'react';
import {Task} from "./types";
import InputField from "./components/InputField";
import TaskList from "./components/TaskList";

function App() {
    const [task, setTask] = useState<string>("");
    const [tasks, setTasks] = useState<Task[]>([])

    function handleAdd(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (task) {
            setTasks([...tasks, {
                id: Date.now(),
                task: task,
                isDone: false
            }]);
            setTask("");
        }
    }

    return (
        <div className={"app"}>
            <span className={"heading"}>Task App</span>
            <InputField task={task} setTask={setTask} handleAdd={handleAdd}/>
            <TaskList tasks={tasks} setTasks={setTasks}/>
        </div>
    );
}

export default App;
