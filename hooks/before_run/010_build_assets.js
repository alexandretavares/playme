#!/usr/bin/env node

console.log('Running Gulp tasks. Please wait...');

var exec = require('child_process').exec;

var child = exec('gulp build-prepare', function(error, stdout, stderr) {
    console.log(stdout);
    
    if (stderr) {
        console.log('****************ERRORS****************');
        console.log(stderr);
        console.log('****************END ERRORS****************');
    }

    if (error !== null) {
        console.log('Exec Error: ' + error);
    }
});
