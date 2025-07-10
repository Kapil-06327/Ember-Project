import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class LayoutWrapperComponent extends Component {
  @service router;

  get isLoginRoute() {
    return this.router.currentRouteName === 'login';
  }
}
