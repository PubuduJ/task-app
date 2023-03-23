import {Task} from "../types";
import React from "react";
import SingleTask from "./SingleTask";

type TaskListProps = {
    tasks: Task[];
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

function TaskList({tasks, setTasks}: TaskListProps) {
    return (
        <div className={"tasks"}>
            {tasks.map((task: Task, index: number) => {
                return (
                    <SingleTask
                        key={task.id}
                        task={task}
                        tasks={tasks}
                        setTasks={setTasks}
                    />
                );
            })}
        </div>
    );
}

export default TaskList;