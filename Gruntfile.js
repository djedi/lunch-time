'use strict';

module.exports = function (grunt) {
    // Load Plugins
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-express-server');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-open');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('workon', 'Start working on this project.', [
        'jshint',
        'sass:dev',
        'express:dev',
        'open:site',
        'open:sublime',
        'watch'
    ]);

    // Variables used in grunt.initConfig
    // Sass vars
    var sassFiles = [{
        expand: true,
        cwd: 'build/sass/',
        dest: 'public/css',
        src: ['screen.scss'],
        ext: '.css'
    }];

    // The config
    grunt.initConfig({
        jshint: {
            options: {
                'bitwise': true,
                'browser': true,
                'camelcase': true,
                'curly': true,
                'esnext': true,
                'eqeqeq': true,
                'eqnull': true,
                'immed': true,
                'indent': 4,
                'latedef': true,
                'maxlen': 180,
                'maxstatements': 20,
                'newcap': true,
                'node': true,
                'strict': true,
                'trailing': true,
                'quotmark': 'single',
                'undef': true,
                'unused': true,
                'white': true
            },
            all: [
                'gruntfile.js',
                'build/js/**/*.js',
                '!vendor/**/*.js'
            ]
        },

        // Sass config
        sass: {
            options: {
                cacheLocation: '.tmp/.sass-cache'
            },
            dev: {
                options: {
                    style: 'expanded',
                    lineComments: true
                },
                files: sassFiles // variable from above
            },
            prod: {
                options: {
                    style: 'compressed'
                },
                files: sassFiles // variable from above
            }
        },

        // Express config
        express: {
            options: {
              // Override defaults here
            },
            dev: {
                options: {
                    script: 'app.js'
                }
            }
        },

        // Watch config
        watch: {
            sass: {
                files: ['build/sass/*.scss'],
                tasks: ['sass:dev']
            },
            express: {
                files:  [ '**/*.js', '!**/node_modules/**', '!Gruntfile.js' ],
                tasks:  [ 'express:dev' ],
                options: {
                    nospawn: true // Without this option specified express won't be reloaded
                }
            },
            livereload: {
                files: ['public/**/*', 'views/**/*', 'app.js'],
                options: {
                    livereload: true
                }
            }
        },

        // Open config
        open: {
            site: {
                path: 'http://localhost:3000',
                app: 'Google Chrome'
            },
            sublime: {
                path: './',
                app: 'Sublime Text 2'
            }
        },

        // Clean config
        clean: {
            all: ['.tmp'] // Add other files or folders here when needed
        }

    });
};