// app/routes/tasks.js
import AuthenticatedRoute from './authenticated';
import { inject as service } from '@ember/service';

export default class TasksRoute extends AuthenticatedRoute {
  @service session;
  @service router;
  @service taskStore;

  queryParams = {
    status: { refreshModel: true },
    page: { refreshModel: true }
  };

  model(params) {
    return this.taskStore.getTasks({
      status: params.status || 'all',
      page: params.page || 1
    });
  }
}

