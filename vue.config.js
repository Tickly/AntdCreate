const path = require('path');

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'antdv-helper': path.resolve(__dirname, './packages'),
      },
    },
  },
};
