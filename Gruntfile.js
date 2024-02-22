module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-simple-mocha');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-mocha-istanbul')
  grunt.loadNpmTasks('grunt-codeclimate');
  grunt.loadNpmTasks('grunt-coveralls');

  grunt.initConfig({
    clean: ['lib-cov', 'coverage'],
    jshint: {
      options: {
        eqeqeq: true,
        eqnull: true,
        browser: true,
        quotmark: 'single',
        globals: {
          'nodejs': true
        },
      },
      ignore_warning: {
        /* Error messages url: 
         * https://github.com/jshint/jshint/blob/2.1.4/src/shared/messages.js */
        options: {
          '-W117': true,  // "'{a}' is not defined."
          '-W097': true,  // "Use the function form of \"use strict\"." 
        },
        src: ['lib/*.js', 'bin/*.js', 'test/*.js']
      },
    },
    simplemocha: {
      backend: {
        src: 'test/*.test.js'
      }
    },
    mocha_istanbul: {
      coverage: {
        src: 'test',
        options: {
          coverage: true,
          check: {
            lines: 75,
            statements: 75
          },
          root: './lib',
          reportFormats: ['lcovonly']
        }
      },
    },
    coveralls: {
      basic_test: {
        // LCOV coverage file relevant to every target
        src: 'coverage/lcov.info',

        // When true, grunt-coveralls will only print a warning rather than
        // an error, to prevent CI builds from failing unnecessarily (e.g. if
        // coveralls.io is down). Optional, defaults to false.
        force: false
      }
    },
    codeclimate: {
      options: {
        file: 'coverage/lcov.info',
        token: '88c929df30272d27ddcaf4149966bb75ed7df6c119858d9168388d6b69d860f5'
      }
    }

  });

  grunt.event.on('coverage', function(lcov, done){
      //console.log(lcov);
      done(); // or done(false); in case of error
  });

  grunt.registerTask('codecoverage', ['coveralls:basic_test', 'codeclimate']);
  grunt.registerTask('default', [ 'clean', 
                                  'jshint', 
                                  'simplemocha', 
                                  'mocha_istanbul',
                                  'codecoverage' ]);
};
