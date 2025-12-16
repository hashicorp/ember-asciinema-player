/**
 * Copyright IBM Corp. 2022, 2025
 * SPDX-License-Identifier: MPL-2.0
 */

import Route from '@ember/routing/route';
import config from 'dummy/config/environment';

export default class ApplicationRoute extends Route {
  async model() {
    const asciicast = await fetch(`${config.rootURL}example.cast`);
    const asciicastContent = await asciicast.text();
    return asciicastContent;
  }
}
