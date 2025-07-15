import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class SharedModalDialogComponent extends Component {
  @action
  stopPropagation(event) {
    event.stopPropagation();
  }
}
