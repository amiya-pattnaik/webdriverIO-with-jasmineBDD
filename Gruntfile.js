module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        webdriver: {
            test: {
                configFile: './test/config/suite.jasmine.conf.js'
            },
        },
    });

    grunt.loadNpmTasks('grunt-jasmine');
    grunt.loadNpmTasks('grunt-webdriver');
    grunt.registerTask('default', ['webdriver:test']);
};
