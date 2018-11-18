const commonConfig = {
  isProduction: false,
  apiPath: 'http://127.0.0.1:8080',
  baseURL: 'http://127.0.0.1:8080',
  port: 80,
};

const environmentConfig = {
  development: {},
  staging: {
    isProduction: true,
    port: 80,
    baseURL: 'http://127.0.0.1:8080',
    apiPath: 'http://127.0.0.1:8080',
  },
  production: {
    isProduction: true,
    baseURL: 'hhttp://localhost:8080',
    apiPath: 'http://localhost:8080',
    port: 80,
  }
};

module.exports = Object.assign(
  commonConfig,
  environmentConfig[process.env.ENV || process.env.NODE_ENV || 'development']
);