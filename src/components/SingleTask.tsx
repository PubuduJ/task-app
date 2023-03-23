import {Task} from "../types";
import React, {useEffect, useRef, useState} from "react";
import {AiFillDelete, AiFillEdit} from "react-icons/ai";
import {MdDone} from "react-icons/md";

type SingleTaskProps = {
    task: Task;
    tasks: Task[];
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}

function SingleTask({task, tasks, setTasks}: SingleTaskProps) {
    const [edit, setEdit] = useState<boolean>(false);
    const [editTask, setEditTask] = useState<string>(task.task);
    const id: number = task.id;
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, [edit])

    function handleDone() {
        setTasks(tasks.map((task: Task, index: number) => {
            return (
                // Spread the task object and invert the isDone property value if the condition is true.
                (task.id === id) ? {...task, isDone: !task.isDone} : task
            );
        }));
    }

    function handleDelete() {
        setTasks(tasks.filter((task: Task, index: number) => {
            return (task.id !== id);
        }))
    }

    function handleEdit() {
        if (!edit && !task.isDone) {
            setEdit(!edit);
        }
    }

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const editedTask: string = event.target.value;
        setEditTask(editedTask);
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setTasks(tasks.map((task: Task, index: number) => {
            return ((task.id === id) ? {...task, task: editTask} : task);
        }));
        setEdit(false);
    }

    return (
        <form className={"tasks-single"} onSubmit={handleSubmit}>
            {
                edit ? (
                    <input ref={inputRef} className={"tasks-single-text"} value={editTask} onChange={handleChange}/>
                ) : (
                    task.isDone ? (<s className={"tasks-single-text"}>{task.task}</s>) : (
                        <span className={"tasks-single-text"}>{task.task}</span>)
                )
            }
            <div>
                <span className={"icon"} onClick={handleEdit}><AiFillEdit/></span>
                <span className={"icon"} onClick={handleDelete}><AiFillDelete/></span>
                <span className={"icon"} onClick={handleDone}><MdDone/></span>
            </div>
        </form>
    )
}

export default SingleTask;