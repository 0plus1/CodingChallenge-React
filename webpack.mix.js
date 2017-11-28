const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */

mix.browserSync({
  server: {
    baseDir: 'public',
  },
  proxy: false,
  files: ['public/dist/app.css', 'public/dist/app.js'],
  injectChanges: true,
  notify: false,
  logSnippet: false,
  browser: 'safari technology preview',
});
mix.react('src/index.jsx', 'public/dist/app.js');
mix.sass('styles/main.scss', 'public/dist/app.css');
