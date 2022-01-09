import React, { useEffect, useState } from "react";
import Task from './components/Task';
import TaskInput from './components/TaskInput';
// import store from './store';
import { observer } from 'mobx-react';

function App() {
  let initialTasks = [
    { id: 0, title: "first task", done: false },
    { id: 1, title: "second task", done: true },
    { id: 2, title: "third task", done: false }
  ];

  let [tasks, setTasks] = useState(initialTasks);

  function tasksKey() {
    for (let i = 0; i < tasks.length; i++) {
      const currentIds = tasks.map(task => task.id).sort((a, b) => a - b);
      if (currentIds[i] !== i) {
        return i;
      }
    }
    return tasks.length;
  }

  function sortedTasks() {
    return tasks.slice().sort((a, b) => a.done === b.done ? 0 : a.done ? 1 : -1);
  }

  useEffect(() => {
    console.log(tasks);
    return () => {
      console.log('dell');
    };
  }, [tasks]);

  const activeTasksCount = () => {
    return tasks.filter(task => !task.done).length;
  }

  const addTask = (task) => {
    tasks.push({
      id: tasksKey(),
      title: task,
      done: false
    });
  }

  const doneTask = (id) => {
    const index = tasks.map(task => task.id).indexOf(id);
    tasks[index].done = true;
    setTasks(tasks);
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(item => item.id !== id));
  }

  return (
    <div className="App">
      <h1 className="top">Active tasks: {activeTasksCount()}</h1>
      {sortedTasks().map(task => (
        <Task
          doneTask={() => doneTask(task.id)}
          deleteTask={() => deleteTask(task.id)}
          task={task}
          key={task.id}>
        </Task>
      ))}
      <TaskInput addTask={(v) => addTask(v)}></TaskInput>
    </div>
  )
}

export default observer(App);
