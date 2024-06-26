const CracoAlias = require('craco-alias');
const { ESLINT_MODES } = require('@craco/craco');

module.exports = {
  babel: {
    plugins: [['@babel/plugin-proposal-decorators', { legacy: true }]],
    ignore: ['./node_modules/mapbox-gl/dist/mapbox-gl.js'],
  },
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'tsconfig',
        baseUrl: './src',
        tsConfigPath: './tsconfig.extend.json',
      },
    },
  ],
};
