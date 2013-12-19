module.exports = function(grunt) {
 
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      
      // WATCH THE SASS FILES FOR CHNAGES AND COMPILE WITH COMPASS
      sass: {
        files: ['scss/**/*.scss'],
        tasks: ['sass', 'autoprefixer'],
        options: {
          spawn: false,
        }
      },
      html: {
        files: ['index.html','**/*.css'],
      },
      js: {
        files: ['js/**/*.js']
      },
      options: {
        livereload: true,
      },
    },

    autoprefixer: {
      options: {
        browsers: ['last 2 version', 'ie 8']
      },
      dist: {
        src: 'css/main.css'
      },
    },

    sass: {
      dist: {
        options: {              
          style: "compact",
        },
        files: {
          'css/main.css': 'scss/main.scss'
        }
      }
    },
    connect: {
      server: {
        options: {
          port: 1234
        }
      }
    },
    
  });
  
  // INCLUDE ALL THE GRUNT TASKS
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  
  // Default task.
  grunt.registerTask('default', [
    'sass',
    'autoprefixer',
    'connect:server',
    'watch'
  ]);
 
};