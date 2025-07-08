import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import {action} from '@ember/object';

export default class TasksController extends Controller {
    @service taskStore;
    newTask = '';

    @action
    updateNewTask(event){
        this.newTask = event.target.value
    }

    @action
    addTask(event){
        event.preventDefault();
        this.taskStore.addTask(this.newTask);
        this.newTask='';
    }
}