import React, { useState } from "react";
import Task from './components/Task';
import TaskInput from './components/TaskInput';
import { observer } from 'mobx-react';

function App() {
  let initialTasks = [
    { id: 0, title: "first task", done: false },
    { id: 1, title: "second task", done: true },
    { id: 2, title: "third task", done: false }
  ];

  let [tasks, setTasks] = useState(initialTasks);

  const tasksKey = () => {
    for (let i = 0; i < tasks.length; i++) {
      const currentIds = tasks.map(task => task.id).sort((a, b) => a - b);
      if (currentIds[i] !== i) {
        return i;
      }
    }
    return tasks.length;
  }

  const sortedTasks = () => {
    return tasks.slice().sort((a, b) => a.done === b.done ? 0 : a.done ? 1 : -1);
  }

  const activeTasksCount = () => {
    return tasks.filter(task => !task.done).length;
  }

  const addTask = (task) => {
    setTasks([...tasks, {
      id: tasksKey(),
      title: task,
      done: false
    }]);
  }

  const doneTask = (id) => {
    const index = tasks.map(task => task.id).indexOf(id);
    setTasks(
      [...tasks.map(task => {
        if (task.id === index) {
          return { ...task, done: true };
        }
        return task;
      }
      )]
    );
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
