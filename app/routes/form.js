import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';


export default class FormRoute extends Route {
    @service form

    model() {
        return this.form.getTasks();
    }

}
