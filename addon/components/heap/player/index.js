import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { later } from '@ember/runloop';
import * as AsciinemaPlayer from 'asciinema-player';

export default class HeapPlayerComponent extends Component {
  // =properties

  /**
   * @type {?AsciinemaPlayer}
   */
  @tracked player = null;

  /**
   *
   */
  initialized = false;

  // =methods

  /**
   * Initializes the asciinema player within the current element.
   * @param {object|string}
   *   source - URL or object passed through to AsciinemaPlayer.create(source).
   * @param {Element}
   *   containerElement - DOM element passed from the did-insert modifier.
   * @returns {AsciinemaPlayer}
   */
  create(source, containerElement, options) {
    // cleanup previous player, if any
    this.dispose();
    // initialize a new AsciinemaPlayer
    this.player =
      AsciinemaPlayer.create(source, containerElement, options);
    return this.player;
  }

  /**
   * Calls asciinema-player's `dispose()` method to destroy the player and
   * cleanup the DOM.  Unsets this component's `player` property.
   */
  dispose() {
    this.player?.dispose();
    this.player = null;
  }

  // =actions

  /**
   * Creates an AsciinemaPlayer within the passed `containerElement`.
   */
  @action
  initializePlayer(containerElement) {
    const { data } = this.args;
    this.create({ data }, containerElement, { poster: 'npt:1:30' });
  }

  /**
   * Destroys the currently initialized AsciinemaPlayer, if any.
   */
  @action
  destroyPlayer() {
    later(() => this.dispose(), 250);
  }
}
