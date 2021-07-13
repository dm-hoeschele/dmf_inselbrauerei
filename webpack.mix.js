let mix = require('laravel-mix');

mix.js('./resources/js/app.js', 'dist/js')
    .js('./resources/js/app_vue.js', 'dist/js').vue()
    .sass('./resources/css/style.scss', 'css')
    .setPublicPath('dist');