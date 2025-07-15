'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    emberData: {
      deprecations: {
        // New projects can safely leave this deprecation disabled.
        // If upgrading, to opt-into the deprecated behavior, set this to true and then follow:
        // https://deprecations.emberjs.com/id/ember-data-deprecate-store-extends-ember-object
        // before upgrading to Ember Data 6.0
        DEPRECATE_STORE_EXTENDS_EMBER_OBJECT: false,
      },
    },
    postcssOptions: {
    compile: {
      enabled: true,
      plugins: [
          require('tailwindcss')('./tailwind.config.js'),
          require('autoprefixer')
        ]
    }
  }
    // Add options here
  });
   app.import('app/styles/app.css');
  return app.toTree();
};
