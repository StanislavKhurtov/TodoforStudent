import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {IconButton, TextField} from "@material-ui/core";
import {AddBox} from "@material-ui/icons";


type AddItemFormPropsType = {
    addItem: (title: string) => void
}

export const AddItemForm = (props: AddItemFormPropsType) => {

    const [newTaskTitle, setNewTaskTitle] = useState("");
    const [error, setError] = useState<string | null>(null);


    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTaskTitle(e.currentTarget.value)
    };

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null);
        if (e.charCode === 13) {
            if (newTaskTitle.trim() !== "") {
                props.addItem(newTaskTitle.trim())
                setNewTaskTitle("")
            } else {
                setError("Title is requares")
            }
        }
    };

    const addTask = () => {
        if (newTaskTitle.trim() !== "") {
            props.addItem(newTaskTitle.trim())
            setNewTaskTitle("")
        } else {
            setError("Title is requares")
        }

    }


    return (
        <div>
            <TextField
                value={newTaskTitle}
                variant="outlined"
                label={'Type value'}
                onChange={onChangeHandler}
                onKeyPress={onKeyPressHandler}
                error={!!error}
                helperText={error}
                /*className={error ? "error" : ""}*/
            />
            <IconButton onClick={addTask}>
                <AddBox/>
            </IconButton>
            {/*{error && <div className="errorMessage">{error}</div>}*/}
        </div>
    );
}
