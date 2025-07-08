import { module, test } from 'qunit';
import { setupTest } from 'todo-app/tests/helpers';

module('Unit | Service | user-store', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:user-store');
    assert.ok(service);
  });
});
