// Karma configuration
// Generated on Sun May 08 2016 20:26:26 GMT+0200 (CEST)

module.exports = function (config) {
  config.set ({
    basePath: '',
    frameworks: [ 'mocha' ],
    files: [
      'src/*.js',
      'test/spec/data/data?.js',
      'test/spec/*.spec.js'
    ],
    exclude: [
    ],
    preprocessors: { },
    // reporters: [ 'progress', 'super-dots', 'verbose' ],
    reporters: [ 'progress' ],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: [ 'Chrome_without_web_security' ],
    customLaunchers: {
      Chrome_without_web_security: {
        base: 'Chrome',
        flags: [ '--disable-web-security' ]
      }
    },
    singleRun: false,
    concurrency: 1
  });
};
