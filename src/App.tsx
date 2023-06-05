import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Component/Todolist/Todolist";


const App = () => {

    let [tasks, setTasks] = useState([
        {id: 1, title: "Html&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "React", isDone: false},
    ]);


    const removeTask = (id: number) => {
        let filteredTask = tasks.filter((el) => el.id !== id)
        setTasks(filteredTask);
    }

    return (
        <div className="App">
            <Todolist
                title="What to Learn"
                tasks={tasks}
                removeTask={removeTask}
            />
        </div>
    );
}

export default App;
