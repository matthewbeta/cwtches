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
      dev: {
        src: 'css/main.css'
      }
    },

    sass: {
      dev: {
        options: {              
          style: "compact",
        },
        files: {
          'css/main.css': 'scss/main.scss'
        }
      }
    },

    useminPrepare: {
      html: 'build/index.html',
      options: {
        dest: 'build'
      }
    },

    usemin: {
      html: 'build/index.html',
      options: {
        dirs: ['build']
      }
    },

    copy: {
      build: {
        files: [
          {expand: true, src: ['index.html'], dest: 'build', filter: 'isFile'},
          {expand: true, src: ['cwtches.mf'], dest: 'build', filter: 'isFile'},
          {expand: true, src: ['css/*.css'], dest: 'build', filter: 'isFile'},
          {expand: true, src: ['js/**/*.js'], dest: 'build', filter: 'isFile'},
          {expand: true, src: ['fonts/*'], dest: 'build', filter: 'isFile'},
        ]
      }
    },

    'ftp-deploy': {
      build: {
        auth: {
          host: 'cwtch.es',
          port: 21,
          authKey: 'cwtches'
        },
        src: 'build',
        dest: 'cwtch.es',
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
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-usemin');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-ftp-deploy');
  
  grunt.registerTask('build', [
    'copy',
    'useminPrepare',
    'usemin',
    'concat',
    'uglify',
    'cssmin'
  ]);

  grunt.registerTask('deploy', ['ftp-deploy']);

  // Default task.
  grunt.registerTask('default', [
    'sass:dev',
    'autoprefixer',
    'connect:server',
    'watch'
  ]);
 
};