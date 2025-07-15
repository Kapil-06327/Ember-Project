// app/routes/authenticated.js
import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class AuthenticatedRoute extends Route {
  @service session;
  @service router; // ✅ Add this line

  beforeModel(transition) {
    if (!this.session.isAuthenticated) {
      this.router.transitionTo('login'); // ✅ Now it works
    }
  }
}
