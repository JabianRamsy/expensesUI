'use strict';

const path = require('path');

const ALLOWED_ENVS = ['development','production'];
const ENV = process.env.NODE_ENV || 'development';

var configs = {
  development: require(path.join(__dirname, 'webpack/development')),
  production: require(path.join(__dirname, 'webpack/production'))
};

const getValidEnv = (env) => { // Arrow function estandar es6
  let isValid = env && env.length > 0 && ALLOWED_ENVS.indexOf(env) !== -1;
  return isValid ? env : 'development';
};

const buildConfig = (env) => {
  let usedEnv = getValidEnv(env);
  return configs[usedEnv];
};

module.exports = buildConfig(ENV);
