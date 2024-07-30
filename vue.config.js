const fs = require('fs');
const path = require('path');

module.exports = {
  publicPath: '/',
  outputDir: 'docs',
  assetsDir: 'static',
  configureWebpack: {
    plugins: [
      {
        apply: (compiler) => {
          compiler.hooks.done.tap('AddCNAMEPlugin', (stats) => {
            const cnamePath = path.join(__dirname, 'docs', 'CNAME');
            fs.writeFileSync(cnamePath, 'greenlabimmi.com');
          });
        },
      },
    ],
  },
};
