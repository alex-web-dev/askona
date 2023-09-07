import gulpPug from 'gulp-pug';

export const pug = () => {
	return app.gulp.src(`${app.path.src.pug}/[^_]*.pug`)
		.pipe(gulpPug({
			pretty: true
		}))
		.pipe(app.gulp.dest(app.path.buildFolder));
}