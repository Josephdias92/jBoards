/* jslint node: true */
'use strict';
module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    wiredep: {
      task: {
        src: ['index.html']
      }
    },
    injector: {
      options: {},
      dev: {
        options: {
          addRootSlash: false,
          template: 'index.html'
        },
        files: {
          'index.html': [
            'app/app.js',
            'app/**/*.module.js',
            'app/**/*.js',
            '!app/**/*.spec.js',
            '!app/**/*.mock.js',
            'css/*.css',
            'app/**/*.css'
          ]
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-injector');
  grunt.loadNpmTasks('grunt-wiredep');
};
