import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class UserStoreService extends Service {
  @tracked users = [];

  addUser(user) {
    this.users = [
      ...this.users,
      {
        id: Date.now(),
        ...user
      }
    ];
  }
}
