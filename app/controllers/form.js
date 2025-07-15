import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class FormController extends Controller {
    @service form;
    newTask = '';

    @action
    updateNewTask(event) {
        this[event.target.name] = event.target.value
    }
    @action
    addTask(event) {
        event.preventDefault();
        this.form.addTask({...this.newTask});
        this.newTask = '';
    }
}
