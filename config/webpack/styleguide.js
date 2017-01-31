const path = require('path');

module.exports = {
 title: 'My Great Style Guide',
 components: '../../app/javascript/**/*.js',
 updateWebpackConfig(webpackConfig) {
   // Your source files folder or array of folders, should not include node_modules
   const dir = path.join(__dirname, '../../app/javascript/');
   webpackConfig.module.loaders.push(
     {
       test: /\.jsx?$/,
       include: dir,
       loader: 'babel-loader',
       options: {
         presets: [
           'react',
           [ 'latest', { 'es2015': { 'modules': false } } ]
         ]
       }
     }
   );
   return webpackConfig;
 },
};
