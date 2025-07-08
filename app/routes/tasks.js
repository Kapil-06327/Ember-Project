import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class TasksRoute extends Route {
    @service taskStore
    model(){
        return this.taskStore.getTasks();
    }
}
