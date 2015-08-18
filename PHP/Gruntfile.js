module.exports = function(grunt) {
  var OUTPUT_DIR = "public/dist";
  var OUTPUT_JS_DIR = "public/dist/js/";
  var INPUT_JS_DIR = "public/js/";
  var INPUT_ASSET = "assets/";

  // Images
  var OUTPUT_IMAGE_DIR = "public/dist/image/";
  var INPUT_IMAGE_DIR = INPUT_ASSET + "images/";

  var JS_FILE = [
    INPUT_JS_DIR + "js1.js",
    INPUT_JS_DIR + "js2.js"
  ];

  // Node Base URL
  var NODE_BASE_DIR = "node_modules/";

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    imagemin: {
      dynamic: {                         // Another target
          options: {                       // Target options
          optimizationLevel: 3,
          svgoPlugins: [{ removeViewBox: false }],
        },
        files: [{
          expand: true,                  // Enable dynamic expansion
          cwd: 'assets/images/',         // Src matches are relative to this path
          src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
          dest: 'public/dist/image/'     // Destination path prefix
        }]
      }
    },

    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= pkg.author %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
        compress: {
          warnings: false
        },
        squeeze: true,
        codegen: {
          quote_keys: true
        },
        sourceMap: false
      },

      product: {
        files: [{
          src: JS_FILE,
          dest: OUTPUT_JS_DIR + 'somejavascript.min.js'
        }]
      },
    },

    copy: {
      fonts: {
        expand: true,
        cwd: INPUT_ASSET + "/css/fonts/",
        src: ['**'],
        dest: OUTPUT_DIR + '/css/fonts/',
        flatten: false,
      },

      image: {
        expand: true,
        cwd: INPUT_ASSET,
        src: ['images/**', 'scripts/select2-release-3.2/select2.png'],
        dest: OUTPUT_IMAGE_DIR,
        flatten: true,
        filter: 'isFile',
      },

      jquery: {
        src: NODE_BASE_DIR + 'jquery/dist/jquery.min.js',
        dest: OUTPUT_JS_DIR + 'jquery.min.js',
      }
    },

    less: {
      development: {
        options: {
          compress: true
        },
        expand: true, // set to true to enable options following options:
        cwd: INPUT_ASSET + "css/less/", // all sources relative to this path
        src: "*.less", // source folder patterns to match, relative to cwd
        dest: "public/dist/css/", // destination folder path prefix
        ext: ".css", // replace any existing extension with this value in dest folder
        flatten: true  // flatten folder structure to single level
      },
      production: {
        options: {
          paths: [INPUT_ASSET + "css/less"],
          compress: true
        },
        expand: true, // set to true to enable options following options:
        cwd: INPUT_ASSET, // all sources relative to this path
        src: ["css/less/*.less", "scripts/select2-release-3.2/select2.css"], // source folder patterns to match, relative to cwd
        dest: "public/dist/css/", // destination folder path prefix
        ext: ".css", // replace any existing extension with this value in dest folder
        flatten: true  // flatten folder structure to single level
      }
    },

    jasmine: {
      coverage: {
        src: [
          'js/somejavascript.js'
          ],
        options: {
          specs: 'js/spec/somejavascript.*.js',
          template: require('grunt-template-jasmine-istanbul'),
          templateOptions: {
            coverage: 'test/jscoverage/coverage.json',
            report: [
              {
                type: 'html',
                options: {
                  dir: 'test/jscoverage/html'
                }
              },
              {
                type: 'cobertura',
                options: {
                  dir: 'test/jscoverage/cobertura'
                }
              },
              {
                type: 'text-summary'
              }
            ]
          }
        }
      }
    },

    shell: {
        multiple: {
            command: [
                'phpunit'
            ].join('&&') // Run each if all succeed
        }
    },

    aws: grunt.file.readJSON('aws-keys.json'), // Read the file

    aws_s3: {
      options: {
        accessKeyId: '<%= aws.AWSAccessKeyId %>', // Use the variables
        secretAccessKey: '<%= aws.AWSSecretKey %>', // You can also use env variables
        region: 'us-east-1',
        uploadConcurrency: 5, // 5 simultaneous uploads
        downloadConcurrency: 5 // 5 simultaneous downloads
      },
      dev: {
        options: {
          bucket: 'bucket_name_qa'
        },
        files: [
          {dest: 's3directory/env.php', cwd: 'include/', action: 'download'} // Downloads s3 to include directory
        ]
      },
      prod: {
        options: {
          bucket: 'bucket_name_prod'
        },
        files: [
          {dest: 's3directory/env.php', cwd: 'include/', action: 'download'} // Downloads s3 to include directory
        ]
      }
    },

    watch: {
      scripts: {
        files: ['public/js/*.js', 'assets/css/less/*.less'],
        tasks: ['uglify', 'copy', 'jasmine:coverage', 'less'],
        options: {
          spawn: false,
        },
      },
    }

  });

  grunt.loadNpmTasks('grunt-contrib-imagemin');

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.loadNpmTasks('grunt-contrib-less');

  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.loadNpmTasks('grunt-contrib-jasmine');

  grunt.loadNpmTasks('grunt-shell');

  grunt.loadNpmTasks('grunt-aws-s3');

  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['aws_s3:dev', 'imagemin', 'uglify', 'copy', 'less:development', 'jasmine:coverage', 'shell']);

};