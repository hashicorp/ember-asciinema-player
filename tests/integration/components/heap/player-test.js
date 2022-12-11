import { module, test } from 'qunit';
import { setupRenderingTest } from 'dummy/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | heap/player', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    const asciicast = await fetch('/example.cast');
    const asciicastContent = await asciicast.text();
    this.set('data', asciicastContent);

    await render(hbs`<Heap::Player @data={{this.data}} />`);

    assert.dom(this.element).hasText('--:----:--');
  });
});
