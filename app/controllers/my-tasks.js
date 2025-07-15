import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class MyTasksController extends Controller {
  @service myTaskStore;

  @tracked isModalOpen = false;

  // Form fields
  @tracked taskForm = {
    title: '',
    description: '',
    priority: '',
    dueDate: '',
    isCompleted: false
  };

  @action
  toggleModal() {
    this.isModalOpen = !this.isModalOpen;

    if (!this.isModalOpen) {
      // Reset form when modal is closed
      this.taskForm = {
        title: '',
        description: '',
        priority: '',
        dueDate: '',
        isCompleted: false
      };
    }
  }

  @action
  updateField(event) {
    const { name, type, value, checked } = event.target;
    this.taskForm = {
      ...this.taskForm,
      [name]: type === 'checkbox' ? checked : value
    };
  }

  @action
  addTask(e) {
    e.preventDefault();

    this.myTaskStore.addTask({
      id: Date.now(), // or some other unique value
      ...this.taskForm
    });

    // Reset form and close modal
    this.taskForm = {
      title: '',
      description: '',
      priority: '',
      dueDate: '',
      isCompleted: false
    };

    this.isModalOpen = false;
  }

  @action
  stopPropagation(e) {
    e.stopPropagation();
  }
}
