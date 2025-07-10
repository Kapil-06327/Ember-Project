import { module, test } from 'qunit';
import { setupRenderingTest } from 'todo-app/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | layout-wrapper', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<LayoutWrapper />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <LayoutWrapper>
        template block text
      </LayoutWrapper>
    `);

    assert.dom().hasText('template block text');
  });
});
