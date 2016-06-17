// Sauce Labs Platform Configurator
// https://wiki.saucelabs.com/display/DOCS/Platform+Configurator#/

// Sauce Connect
// cd ~/Downloads/sc-4.3.16-osx/bin
// ./sc -u $SAUCE_USERNAME -k $SAUCE_ACCESS_KEY

// process.env.SAUCE_USERNAME = '';
// process.env.SAUCE_ACCESS_KEY = '';

var customLaunchers = {
	// 'Local_Phantom': {
	// 	base: 'PhantomJS'
	// },
	'SL_Chrome': {
		base: 'SauceLabs',
		browserName: 'chrome'
	},
	// 'SL_InternetExplorer': {
	// 	base: 'SauceLabs',
	// 	browserName: 'internet explorer',
	// 	version: '10'
	// },
	// 'SL_FireFox': {
	// 	base: 'SauceLabs',
	// 	browserName: 'firefox',
	// }
};

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
			'www/js/ng/angular.js',
			'www/js/ng/angular-animate.js',
			'www/js/ng/angular-sanitize.js',
			'www/js/ng/angular-ui-router.js',
			'www/js/ng/angular-mocks.js',
			'www/js/init.js',
			'www/js/constants.js',
			'www/js/router.js',
			'www/js/services/widgets.js',
			'www/js/filters/capitalize.js',
			'www/js/filters/zero-alert.js',
			'www/js/directives/reqd.js',
			'www/js/controllers/home.js',
			'www/js/controllers/widget-edit.js',
			'www/js/controllers/widget-view.js',
			'www/js/site.js',
			'www/tests/specs/**/*.js'
		],


    // list of files to exclude
    exclude: [],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
			'www/js/!(ng)/*.js': ['coverage'],
			'www/js/*.js': ['coverage'],
		},


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['junit', 'coverage', 'saucelabs'],

		junitReporter: {
			outputDir: 'build/reports/junit',
			outputFile: 'test-results.xml',
			useBrowserName: false
		},

		coverageReporter: {
      dir: 'build/reports/coverage',
      reporters: [
        { type: 'html', subdir: 'report-html' },
        { type: 'cobertura', subdir: '.', file: 'cobertura.xml' }
      ]
    },

		sauceLabs: {
      testName: 'Karma and Sauce Labs demo',
			startConnect: false
    },

		captureTimeout: 120000,


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // // start these browsers
    // // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
		customLaunchers: customLaunchers,

		browsers: Object.keys(customLaunchers),

		phantomjsLauncher: {
			// Have phantomjs exit if a ResourceError is encountered (useful if karma exits without killing phantom)
			exitOnResourceError: true
		},

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
