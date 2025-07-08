import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class ProjectStoreService extends Service {
  @tracked projects = [];

  async fetchProjects() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    this.projects = data.slice(0, 10);
  }

  async addProject(title) {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({ title, body: '', userId: 1 }),
      headers: { 'Content-type': 'application/json; charset=UTF-8' }
    });

    const newProject = await response.json();
    this.projects = [...this.projects, newProject];
  }

  async updateProject(id, title) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ title, body: '', userId: 1 }),
      headers: { 'Content-type': 'application/json; charset=UTF-8' }
    });

    const updated = await response.json();

    this.projects = this.projects.map((p) => {
      return p.id === id ? { ...p, ...updated } : p;
    });
  }
}
