import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class LoginController extends Controller {
  @service session;
  @service router; // Add this

  email = '';
  password = '';
  errorMessage = '';

  @action
  updateEmail(event) {
    this.email = event.target.value;
  }

  @action
  updatePassword(event) {
    this.password = event.target.value;
  }

  @action
async handleLogin(event) {
  event.preventDefault();

  const { email, password } = this;

  try {
    await this.session.authenticate(email, password);
    console.log('Login successful, routing to tasks');
    this.router.transitionTo('tasks');
  } catch (e) {
    console.error('Login failed:', e);
    this.errorMessage = 'Invalid credentials. Try again.';
  }
}
}
