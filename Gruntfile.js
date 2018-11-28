module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),
		
		dir: {
	    css: {
				dist: "public/styles"
	    },
	    js: {
		    concat: "src/js/concat",
				dist: "public/scripts"
	    }
    },
		concat: {
			options: {
				separator: ";"
			},
			app: {
				src: [
					"src/js/vue-carousel.min.js",
					"src/js/vue-chart.js",
					"src/js/vue-record.js",
					"src/js/vue-login.js",
					"src/js/index.js"
				],
				dest: "<%= dir.js.concat %>/app.concat.js"
			}
		},
		uglify: {
			options: {
				compress: {
					drop_console: false
				}
			},
			app: {
				files: {
					"<%= dir.js.dist %>/app.min.js": ["<%= concat.app.dest %>"],
				},
			}
		},
		sass: {
			app: {
				options: {
					style: "compressed",
					sourcemap: "none"
				},
				files: [
					{
						expand: true,
						cwd: "src/sass",
						src: ["app.scss"],
						dest: "<%= dir.css.dist %>",
						ext: ".min.css"
					}
				]
			}
		},
		watch: {
			app: {
				files: ["src/sass/**/*.scss", "src/js/**/*.js"],
				tasks: ["sass:app", "concat:app", "uglify:app"]
			}
		}
	});

	grunt.loadNpmTasks("grunt-contrib-concat");
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks("grunt-contrib-sass");

	grunt.registerTask("default", "watch:app");
	grunt.registerTask('build', ['concat', 'uglify']);
};
