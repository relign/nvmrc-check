#! /usr/bin/env node
"use strict";

var semver = require('semver');
var node;

process.argv.forEach(function (arg, i) {
    if (arg === '--node') {
        node = i + 1;
    }
});

if (!node || !semver.satisfies(process.version, process.argv[node])) {
    console.log(`Required node version ${process.argv[node]} not satisfied with current version ${process.version}.`);
    process.exit(1);
}