import {Task} from "../types";
import React from "react";

type SingleTaskProps = {
    task: Task;
    tasks: Task[];
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}

function SingleTask({task, tasks, setTasks}: SingleTaskProps) {

    return (
        <>

        </>
    );
}

export default SingleTask;