module.exports = function(grunt) {

    grunt.initConfig({
        serve: {
            options: {
                port: 9000
            },
            'path': '/'
        }
    });
    grunt.loadNpmTasks('grunt-serve');


};