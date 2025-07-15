import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class TasksController extends Controller {
  static queryParams = ['status', 'page']; // ✅ define here (NOT decorator)

  @service taskStore;

  @tracked status = 'all';
  @tracked page = 1;

  newTask = '';

  @action
  updateNewTask(event) {
    this.newTask = event.target.value;
  }

  @action
  addTask(event) {
    event.preventDefault();
    this.taskStore.addTask(this.newTask);
    this.newTask = '';
  }

   @action
  goToPrevPage() {
    if (this.page > 1) {
      this.page--;
    }
  }

  @action
  goToNextPage() {
    this.page++;
  }
  
}
