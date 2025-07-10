import Service from '@ember/service';

export default class TaskStoreService extends Service {
    tasks = [
        {id:1,title:'Learn Ember.js',isCompleted:false},
        {id:2,title:'Build a ToDo app',isCompleted:true}
    ];

    getTasks(){
        return this.tasks;
    }

    addTask(title){
        this.tasks.push({
            id:Date.now(),
            title,
            isCompleted:false
        });
    }
}


