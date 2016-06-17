module.exports = function(grunt) {

	grunt.initConfig({
		karma: {
      // Jenkins settings
      continuous: {
        configFile: 'karma.conf.js'
      }
    }
	});

	grunt.loadNpmTasks('grunt-karma');

	grunt.registerTask('cibuild', ['karma:continuous']);

};
