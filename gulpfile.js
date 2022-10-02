const {src, dest, watch, series} = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function compileStyles() {
    return src("index.scss").pipe(sass()).pipe(dest("styles"));
}

function watchSass() {
    watch(["index.scss"], compileStyles);
}

exports.default = series(compileStyles, watchSass);
