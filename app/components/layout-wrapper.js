import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import {action} from '@ember/object';

export default class LayoutWrapperComponent extends Component {
  @service router;

  get isLoginRoute() {
    return this.router.currentRouteName === 'login';
  }

  @action
  isLogOut() {
    this.router.transitionTo('login');
  }
}
