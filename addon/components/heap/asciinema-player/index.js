import Component from '@glimmer/component';
import { action } from '@ember/object';
import * as AsciinemaPlayer from 'asciinema-player';

export default class AsciinemaPlayerComponent extends Component {

  /**
   * Initializes the asciinema player within the current element.
   * @param {Element} element - DOM element passed from the did-insert modifier.
   */
  @action
  initializePlayer(element) {
    const { data } = this.args;
    AsciinemaPlayer.create({ data }, element, { poster: 'npt:1:30' });
  }
}
