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
          // 直接使用 outputDir 作为 docs 目录的路径
          const outputDir = path.join(__dirname, 'docs');
          // 检查 docs 目录是否存在，如果不存在则创建
          if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir, { recursive: true });
          }
          // 定义 CNAME 文件的完整路径，直接在 docs 目录下创建
          const cnamePath = path.join(outputDir, 'CNAME');
          // 写入 CNAME 文件，指定域名
          fs.writeFileSync(cnamePath, 'greenlabimmi.com');
        });
      },
    },
  ],
},
};
