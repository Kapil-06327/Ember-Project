import Service from '@ember/service';

export default class FormService extends Service {

    names = [
        { id: 1, firstname: 'Prem', lastname: 'kumar' },
        { id: 2, firstname: 'Prakash', lastname: 'Bala' }
    ];
    getTasks() {
        return this.names;
    }

    addTask(title) {
        this.names.push({
            id: Date.now(),
            title
        });
    }
}
