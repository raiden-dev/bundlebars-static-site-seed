module.exports = function (grunt) {

  grunt.initConfig({
    // Merge data
    'data-merge': {
      options: {
        space: 2
      },

      build: {
        files: {
          'data/build/index.yml': ['data/partials/*.yml', 'data/pages/index.yml'],
          'data/build/about.yml': ['data/partials/*.yml', 'data/pages/about.yml']
        }
      }
    },

    // Build pages
    bundlebars: {
      pages: {
        options: {
          partials: 'partials/',
          helpers: 'helpers/',
          data: 'data/build/'
        },

        files: [{
          expand: true,
          cwd: 'pages/',
          src: '*.html',
          dest: 'public/',
          ext: '.html'
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-data-merge');
  grunt.loadNpmTasks('bundlebars');

  grunt.registerTask('default', ['data-merge', 'bundlebars']);
};
