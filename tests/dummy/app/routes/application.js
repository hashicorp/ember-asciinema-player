import Route from '@ember/routing/route';

export default class ApplicationRoute extends Route {
  async model() {
    const asciicast = await fetch('example.cast');
    const asciicastContent = await asciicast.text();
    return asciicastContent;
  }
}
