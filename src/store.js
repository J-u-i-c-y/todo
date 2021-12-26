import { makeObservable, computed, observable, action } from 'mobx';

class Store {
  constructor() {
    makeObservable(this, {
      tasks: observable,
      sortedTasks: computed,
      activeTasksCount: computed,
      doneTask: action,
      addTask: action,
      deleteTask: action
    })
  }

  tasks = [
    { id: 0, title: "first task", done: false },
    { id: 1, title: "second task", done: true },
    { id: 2, title: "third task", done: false }
  ];

  tasksKey = () => {
    for (let i = 0; i < this.tasks.length; i++) {
      const currentIds = this.tasks.map(task => task.id).sort((a, b) => a - b);
      if (currentIds[i] !== i) {
        return i;
      }
    }
    return this.tasks.length;
  }

  setTasks(payload) {
    this.tasks = payload;
  }
  get sortedTasks() {
    return this.tasks.slice().sort((a, b) => a.done === b.done ? 0 : a.done ? 1 : -1);
  }

  get activeTasksCount() {
    return this.tasks.filter(task => !task.done).length;
  }

  addTask(task) {
    let tasks = this.tasks;
    tasks.push({
      id: this.tasksKey(),
      title: task,
      done: false
    })
    this.setTasks(tasks);
  }

  doneTask(id) {
    let tasks = this.tasks;
    const index = tasks.map(task => task.id).indexOf(id);
    tasks[index].done = true;
    this.setTasks(tasks);
  }

  deleteTask(id) {
    this.setTasks(this.tasks.filter(item => item.id !== id));
  }
}

export default new Store();