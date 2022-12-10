'use strict';

const path = require('path');

module.exports = {
  name: require('./package').name,
  included(app) {
    this._super.included.apply(this, arguments);
    this.includeAsciinemaPlayerStyles(app);
  },

  includeAsciinemaPlayerStyles(app) {
    const stylesPath = path.resolve(require.resolve('asciinema-player'), '../bundle');
    // Setup default sassOptions on the running application
    app.options.sassOptions = app.options.sassOptions || {};
    app.options.sassOptions.includePaths =
      app.options.sassOptions.includePaths || [];
    // Include the addon styles
    app.options.sassOptions.includePaths.push(stylesPath);
  }
};
