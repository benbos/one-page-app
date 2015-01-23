/**
 * Usemin config
 */
module.exports = {
    html: ['dist/*.html'],
    css: 'dist/css/*.css',
    js: '.tmp/js/*.js',
    options: {
        // assetsDirs: 'dist/public'
        assetsDirs: ['.tmp','dist/public','media'], // Important!
        patterns: {
           js: [
             [/(img\/.*?\.(?:gif|jpeg|jpg|png|webp|svg))/gm, 'Update the JS to reference our revved images']
           ]
        }
    }
};