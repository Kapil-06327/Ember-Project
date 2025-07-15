import { inject as service } from '@ember/service';
import AuthenticatedRoute from './authenticated';

export default class ProjectsRoute extends AuthenticatedRoute {
  @service projectStore;

  async model() {
    await this.projectStore.fetchProjects();
    return this.projectStore.projects;
  }
}
