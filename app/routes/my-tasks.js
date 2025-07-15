// app/routes/my-tasks.js
import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class MyTasksRoute extends Route {
  @service myTaskStore;

  model() {
    return this.myTaskStore.getTasks(); // returns tracked data
  }
}
