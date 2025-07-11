import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class LayoutWrapperComponent extends Component {
  @service router;
  @service session;

  get isLoginRoute() {
    return this.router.currentRouteName === 'login';
  }

  @action
  handleLogout() {
    this.session.logout(); // clear session data
    this.router.transitionTo('login');
  }

}
