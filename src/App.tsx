import React, {useState} from 'react';
import {Task} from "./types";

function App() {
  const [task, setTask] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>([])
    return (
        <div className={"app"}>
            <span className={"heading"}>Task App</span>
        </div>
    );
}

export default App;
