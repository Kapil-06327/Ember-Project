import EmberRouter from '@ember/routing/router';
import config from 'todo-app/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('tasks');
  this.route('users');
  this.route('projects');
  this.route('login');
  // this.route('projects', function() {
  //   this.route('project', { path: '/:project_id' }); // dynamic segment /projects/123   -> app/templates/projects/project.hbs
  // });
  this.route('my-tasks');
});
