const mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/js')
   .sass('resources/sass/app.scss', 'public/css')
   .copy('node_modules/admin-lte/dist/css/adminlte.min.css', 'public/css/adminlte.css')
   .copy('node_modules/admin-lte/dist/js/adminlte.min.js', 'public/js/adminlte.js')
   .copy('node_modules/admin-lte/plugins/fontawesome-free/css/all.min.css', 'public/css/fontawesome.css')
   .copyDirectory('node_modules/admin-lte/plugins/fontawesome-free/webfonts', 'public/webfonts');

