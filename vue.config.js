const fs = require('fs');
const path = require('path');

module.exports = {
  publicPath: '/greenlab_offical/',
  outputDir: path.join('docs', 'greenlab_offical'),
  assetsDir: 'static',
  configureWebpack: {
    plugins: [
      {
        apply: (compiler) => {
          compiler.hooks.done.tap('AddCNAMEPlugin', (stats) => {
            const cnamePath = path.join(__dirname, 'docs', 'greenlab_offical', 'CNAME');
            fs.writeFileSync(cnamePath, 'greenlabimmi.com');
          });
        },
      },
    ],
  },
};
