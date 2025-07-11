import Component from "@glimmer/component";
import {action} from '@ember/object';

export default class ExampleConditionComponent extends Component {
    isLoggedIn = true;
    isAdmin = false;
    age = 20;
    items = ['Item A','Item B',null];
    status = 'active';

    get isOlder(){
        return this.age > 18;
    }

    get isLoggedInAndAdmin(){
        return this.isLoggedIn && this.isAdmin;
    }

    @action
    toggleLogin(){
        this.isLoggedIn = !this.isLoggedIn;
    }

}






