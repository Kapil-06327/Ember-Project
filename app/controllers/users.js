import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class UsersController extends Controller {
  @service userStore;
  @tracked name = '';
  @tracked email = '';
  @tracked role = '';
  @tracked isActive = false;
  @tracked error = '';

  updateField = (field, event) => {
    this[field] = event.target.value;
    this.error = '';
  }

  updateCheckbox = (event) => {
    this.isActive = event.target.checked;
  }

  addUser = (event) =>  {
    event.preventDefault();
    if (!this.name.trim() || !this.email.trim() || !this.role.trim()) {
      this.error = 'All fields are required.';
      return;
    }
    this.userStore.addUser({
      name: this.name.trim(),
      email: this.email.trim(),
      role: this.role.trim(),
      isActive: this.isActive
    });
    this.name = '';
    this.email = '';
    this.role = '';
    this.isActive = false;
  }
}