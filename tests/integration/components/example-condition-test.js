import { module, test } from 'qunit';
import { setupRenderingTest } from 'todo-app/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | example-condition', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<ExampleCondition />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <ExampleCondition>
        template block text
      </ExampleCondition>
    `);

    assert.dom().hasText('template block text');
  });
});
