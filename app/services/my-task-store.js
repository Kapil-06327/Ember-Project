// app/services/my-task-store.js
import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class MyTaskStoreService extends Service {
  @tracked tasks = [];

  constructor() {
    super(...arguments);
    this.tasks = this.loadTasks(); // Initialize from localStorage
  }

  addTask(task) {
    this.tasks = [...this.tasks, task];
    this.saveTasks();
  }

  loadTasks() {
    try {
      const stored = localStorage.getItem('my-tasks');
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      console.error('Failed to load tasks from localStorage', e);
      return [];
    }
  }

  saveTasks() {
    try {
      localStorage.setItem('my-tasks', JSON.stringify(this.tasks));
    } catch (e) {
      console.error('Failed to save tasks to localStorage', e);
    }
  }

  getTasks() {
    return this.tasks;
  }

  clearTasks() {
    this.tasks = [];
    this.saveTasks();
  }
}
