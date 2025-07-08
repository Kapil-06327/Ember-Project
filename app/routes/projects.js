import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ProjectsRoute extends Route {
  @service projectStore;

  async model() {
    await this.projectStore.fetchProjects();
    return this.projectStore.projects;
  }
}
