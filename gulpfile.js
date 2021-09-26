/* jshint ignore:start */
const { series, src, dest, watch } = require("gulp");
var sass = require("gulp-sass")(require("node-sass"));
const rename = require("gulp-rename");
const livereload = require("gulp-livereload");
const minifyCss = require("gulp-cssnano");
const packageImporter = require("node-sass-package-importer");
const bulkSass = require("organizze-gulp-sass-bulk-import");

function sassTask(cb) {
  src("app/scss/style.scss")
    .pipe(bulkSass())
    .pipe(
      sass({
        importer: packageImporter(),
      }).on("error", sass.logError)
    )
    .pipe(minifyCss())
    .pipe(rename("style.min.css"))
    .pipe(dest("app/css"))
    .pipe(livereload());
  cb();
}

function jsTask(cb) {
  src("./node_modules/bootstrap/dist/js/*.js").pipe(dest("app/js/bootstrap"));
  cb();
}

function watchTask(cb) {
  livereload.listen();
  watch(["app/scss/**/*"], sassTask);
  cb();
}

exports.sass = sassTask;
exports.watch = watchTask;
exports.js = jsTask;

exports.default = series(sassTask, jsTask, watchTask);
/* jshint ignore:end */
