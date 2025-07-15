import { module, test } from 'qunit';
import { setupTest } from 'todo-app/tests/helpers';

module('Unit | Service | form', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:form');
    assert.ok(service);
  });
});
