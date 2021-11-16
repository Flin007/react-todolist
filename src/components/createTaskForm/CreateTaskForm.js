import React, {useState} from 'react';
import s from './createTaskForm.module.css';
function CreateTaskForm() {
    return(
        <div className={s.createTaskContainer}>
            <input type="text" placeholder='What needs to be done?'/>
            <button>Create</button>
        </div>
    )
}

export default CreateTaskForm;