const path = require('path');
const { THEME_PATH } = require('../../utils/paths');

/**
 * Loads a specified theme
 *
 * @param {String} theme - The name of the theme
 * @return {Promise} - The theme module
 */
exports.loadTheme = theme => new Promise((resolve) => {
  if (theme) {
    const p = path.resolve(THEME_PATH, theme);
    // eslint-disable-next-line global-require
    const m = require(p);
    resolve(m);
  } else {
    resolve(false);
  }
});
