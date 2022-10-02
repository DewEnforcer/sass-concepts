const {src, dest, watch, series} = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function compileStyles() {
    return src("conceptual/**/*.scss").pipe(sass()).pipe(dest("styles"));
}

function watchSass() {
    watch(["conceptual/**/*.scss"], compileStyles); //** any subfolder
}

exports.default = series(compileStyles, watchSass);
