import { module, test } from 'qunit';
import { setupTest } from 'todo-app/tests/helpers';

module('Unit | Route | my-tasks', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:my-tasks');
    assert.ok(route);
  });
});
