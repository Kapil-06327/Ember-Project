import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class UsersRoute extends Route {
  @service userStore;

  model() {
    return this.userStore.users;
  }
}
