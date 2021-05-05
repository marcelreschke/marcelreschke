#!/usr/bin/env node

const pkgJSON = require('./package.json');
const welcome = require('cli-welcome');

welcome({
    title: pkgJSON.name,
    tagLine: 'Cheers mate!',
    version: pkgJSON.version,
    description: pkgJSON.description,
    bgColor: `#FADC00`,
    color: `#000000`,
    bold: true,
})

console.log('Marcel Reschke - Digital Strategies as a Service!');