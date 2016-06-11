module.exports = function(grunt) {

	grunt.initConfig({
		karma: {
      // Jenkins settings
      continuous: {
        configFile: 'karma.conf.js',
        singleRun: true,
        browsers: ['PhantomJS'],
        reporters: ['dots', 'junit'],
        junitReporter: {
          outputFile: 'test-results.xml'
        }
      }
    }
	});

	grunt.loadNpmTasks('grunt-karma');

	grunt.registerTask('cibuild', ['karma:continuous']);

};
