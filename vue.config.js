const fs = require('fs');
const path = require('path');

module.exports = {
  publicPath: '/greenlab_offical/',
  outputDir: 'docs/greenlab_offical',
  assetsDir: 'static',
  configureWebpack: {
    plugins: [
      {
        apply: (compiler) => {
          compiler.hooks.done.tap('AddCNAMEPlugin', (stats) => {
            const outputDir = path.join(__dirname, 'docs', 'greenlab_offical');
            if (!fs.existsSync(outputDir)) {
              fs.mkdirSync(outputDir, { recursive: true });
            }
            const cnamePath = path.join(outputDir, 'CNAME');
            fs.writeFileSync(cnamePath, 'greenlabimmi.com');
          });
        },
      },
    ],
  },
};
