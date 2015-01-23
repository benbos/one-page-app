module.exports = {
    dist: {
        files: [{
            cwd: 'src/',
            src: [
                'public/index.html',
                'public/.htaccess',
                'public/favicon.ico',
                'public/img/**/*.{jpg,gif,png,json}',
                'public/fonts/**/*'
             ],
            dest: 'dist/',
            expand: true
        }]
    }
};