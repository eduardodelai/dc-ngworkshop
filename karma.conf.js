module.exports = function(config){
  config.set({

    basePath : '',

    files : [
      'assets/libs/angular/angular.js',
      'assets/libs/angular-mocks/angular-mocks.js',

      'app/**/*.module.js',
      'app/**/*.constant.js',
      'app/**/*.config.js',
      'app/**/*.provider.js',
      'app/**/*.route.js',
      'app/**/*.factory.js',
      'app/**/*.service.js',
      'app/**/*.resource.js',
      'app/**/*.filter.js',
      'app/**/*.directive.js',
      'app/**/*.controller.js',
      'app/**/*.spec.js'
    ],


    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['PhantomJS'],

    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultanous
    concurrency: Infinity,

    client: {
      captureConsole: true
    }

  });
};