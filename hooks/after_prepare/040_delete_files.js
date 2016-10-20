#!/usr/bin/env node

console.log('Deleting unnecessary files...');

var exec = require('child_process').exec;

var child = exec('gulp delete-files', function(error, stdout, stderr) {
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
