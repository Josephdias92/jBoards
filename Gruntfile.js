/* jslint node: true */
"use strict";
module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    wiredep: {
      task: {
        src: ['index.html']
      }
    },
    injector: {
      options: {
        // Task-specific options go here.
      },
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
    },
    'http-server': {
      'dev': {
        port: 8282,
        openBrowser: true
      }
    },
  });
  grunt.loadNpmTasks('grunt-http-server');
  grunt.loadNpmTasks('grunt-injector');
  grunt.loadNpmTasks('grunt-wiredep');
};
