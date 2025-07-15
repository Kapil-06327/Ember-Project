import Model, { attr } from '@ember-data/model';

export default class MyTaskModel extends Model {
  @attr('string') title;
  @attr('string') description;
  @attr('string') priority;
  @attr('date') dueDate;
  @attr('boolean') isCompleted;
}
