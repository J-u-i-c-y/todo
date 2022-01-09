// import { makeObservable, computed, observable, action } from 'mobx';
// import React, { useEffect, useState } from 'react';

// class Store {
//   constructor() {
//     makeObservable(this, {
//       tasks: observable,
//       sortedTasks: computed,
//       activeTasksCount: computed,
//       doneTask: action,
//       addTask: action,
//       deleteTask: action
//     })
//   }

//   tasks = [
//     { id: 0, title: "first task", done: false },
//     { id: 1, title: "second task", done: true },
//     { id: 2, title: "third task", done: false }
//   ];

//   tasksKey = () => {
//     for (let i = 0; i < this.tasks.length; i++) {
//       const currentIds = this.tasks.map(task => task.id).sort((a, b) => a - b);
//       if (currentIds[i] !== i) {
//         return i;
//       }
//     }
//     return this.tasks.length;
//   }

//   setTasks(payload) {
//     this.tasks = payload;
//   }
//   get sortedTasks() {
//     return this.tasks.slice().sort((a, b) => a.done === b.done ? 0 : a.done ? 1 : -1);
//   }

//   get activeTasksCount() {
//     return this.tasks.filter(task => !task.done).length;
//   }

//   addTask(task) {
//     let tasks = this.tasks;
//     tasks.push({
//       id: this.tasksKey(),
//       title: task,
//       done: false
//     })
//     this.setTasks(tasks);
//   }

//   doneTask(id) {
//     let tasks = this.tasks;
//     const index = tasks.map(task => task.id).indexOf(id);
//     tasks[index].done = true;
//     this.setTasks(tasks);
//   }

//   deleteTask(id) {
//     this.setTasks(this.tasks.filter(item => item.id !== id));
//   }
// }

// function Store() {
// let makeObservable =  {
//   tasks: observable,
//   sortedTasks: computed,
//   activeTasksCount: computed,
//   doneTask: action,
//   addTask: action,
//   deleteTask: action
// };

// export default tasks = [
//   { id: 0, title: "first task", done: false },
//   { id: 1, title: "second task", done: true },
//   { id: 2, title: "third task", done: false }
// ];

// const tasksKey = () => {
//   for (let i = 0; i < tasks.length; i++) {
//     const currentIds = tasks.map(task => task.id).sort((a, b) => a - b);
//     if (currentIds[i] !== i) {
//       return i;
//     }
//   }
//   return tasks.length;
// }

// const setTasks = (payload) => {
//   tasks = payload;
// }

// const sortedTasks = () => {
//   return tasks.slice().sort((a, b) => a.done === b.done ? 0 : a.done ? 1 : -1);
// }

// const activeTasksCount = () => {
//   return tasks.filter(task => !task.done).length;
// }

// export default function addTask(task) {
//   let tasks = this.tasks;
//   tasks.push({
//     id: tasksKey(),
//     title: task,
//     done: false
//   })
//   setTasks(tasks);
// }

// export default doneTask = (id) => {
//   let tasks = this.tasks;
//   const index = tasks.map(task => task.id).indexOf(id);
//   tasks[index].done = true;
//   this.setTasks(tasks);
// }

// export default deleteTask = (id) => {
//   setTasks(tasks.filter(item => item.id !== id));
// }

// }

// export default new Store();