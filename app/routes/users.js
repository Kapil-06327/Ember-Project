import AuthenticatedRoute from './authenticated';
import { inject as service } from '@ember/service';

export default class UsersRoute extends AuthenticatedRoute {
  @service userStore;

  model() {
    return this.userStore.users;
  }
}
