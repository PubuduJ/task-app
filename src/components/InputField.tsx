import React, {SetStateAction, useRef} from "react";

type InputFieldProps = {
    task: string;
    setTask: React.Dispatch<SetStateAction<string>>;
    handleAdd: (event: React.FormEvent<HTMLFormElement>) => void;
}

function InputField({task, setTask, handleAdd}: InputFieldProps) {
    const inputRef = useRef<HTMLInputElement>(null);

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const newTask = event.target.value;
        setTask(newTask);
    }

    return (
        <form className={"input"} onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
            handleAdd(event);
            inputRef.current?.blur();
        }}>
            <input ref={inputRef} className={"input-box"} type={"text"} placeholder={"Enter a task"}
                   onChange={handleChange} value={task}/>
            <button className={"input-submit"} type={"submit"}>Go</button>
        </form>
    );
}

export default InputField;