import Model from '@ember-data/model';

export default class FormModel extends Model {
    @attr('string') firstname;
    @attr('string') lastname;
}
