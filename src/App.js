import React, {useState} from 'react';
import s from './app.module.css';
import Task from "./components/task/Task";
import CreateTastForm from "./components/createTaskForm/CreateTaskForm";

function App() {
    const [todos, setTodos] = useState([]);

    const createTodo = () => {

    }

    const removeTodo = () => {

    }

    const toggleTodoStatus = () => {

    }

    return (
        <div className={s.App}>
            <h1>todos</h1>
            <div className={s.mainContainer}>
                <div className={s.header}>
                    <CreateTastForm/>
                </div>
                <div className={s.body}>
                    {todos.map((todo) =>{
                        return(
                            <Task
                                key={todo.id}
                                todo={todo}
                                toggleTodoStatus={toggleTodoStatus}
                                removeTodo={removeTodo}
                            />
                        )
                    })}
                    <Task />
                </div>
            </div>
        </div>
    );
}

export default App;
