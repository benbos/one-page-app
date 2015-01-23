module.exports = {
    compile: {
        options: {
            //  name: "./src/public/components/almond/almond.js",
            // name: "/src/public/js/app.js",
            name: 'app',
            baseUrl: "src/public/js",
            mainConfigFile: "src/public/js/app.js",
            out: ".tmp/js/app.min.js"
        },
        paths: {
            jquery: 'components/jquery/jquery'
        }
    }
};