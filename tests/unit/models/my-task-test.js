import { setupTest } from 'todo-app/tests/helpers';
import { module, test } from 'qunit';

module('Unit | Model | my task', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('my-task', {});
    assert.ok(model, 'model exists');
  });
});
