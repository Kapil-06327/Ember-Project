import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class TasksRoute extends Route {
  @service session;
  @service router;
  @service taskStore; // ✅ Add this

  beforeModel() {
    if (!this.session.isAuthenticated) {
      this.router.transitionTo('login');
    }
  }

  model() {
    return this.taskStore.getTasks(); // ✅ Correct service used here
  }
}
