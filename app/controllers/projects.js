import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class ProjectsController extends Controller {
  @service projectStore;
  @tracked projectTitle = '';
  @tracked isEditing = false;
  @tracked editId = null;

  @action
  updateTitle(e) {
    this.projectTitle = e.target.value;
  }

  @action
  async saveProject(e) {
    e.preventDefault();

    if (this.isEditing) {
      await this.projectStore.updateProject(this.editId, this.projectTitle);
    } else {
      await this.projectStore.addProject(this.projectTitle);
    }

    this.projectTitle = '';
    this.editId = null;
    this.isEditing = false;
  }

  @action
  editProject(project) {
        
    console.log(project, "project");

    this.projectTitle = project.title;
    this.editId = project.id;
    this.isEditing = true;
  }

  @action
  cancelEdit(project) {
    this.projectTitle = '';
    this.editId = null;
    this.isEditing = false;
  }
}
