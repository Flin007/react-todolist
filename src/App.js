import s from './app.module.css';
import Task from "./components/task/Task";

function App() {
    return (
        <div className={s.App}>
            <h1>todos</h1>
            <div className={s.mainContainer}>
                <div className={s.header}>
                    <input type="text" placeholder='What needs to be done?'/>
                </div>
                <div className={s.body}>
                    <Task />
                </div>
            </div>
        </div>
    );
}

export default App;
