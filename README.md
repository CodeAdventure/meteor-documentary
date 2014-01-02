# JSDoc Template for Meteor packages

Uses [Docstrap](https://github.com/terryweiss/docstrap) template for JSDoc 3
to generate beautiful documentation for your packages or application code.

## Install with Meteorite
Install with: `mrt add jsdoc-template`

This will download the package with the template and plugins into the 
packages folder within your Meteor app. This package does not include
any code for your application, it just provides the template files
for your JSDoc setup, so you don't have to copy those files around
for every package.

## Configuration
You have to use JSDoc 3 and tell it to use the template provided by
this package. I will only explain how to do this by using Grunt.

### Install grunt packages
Create a node package.json file within your package folder like this:

```JavaScript
{
  "name": "your-package",
  "description": "…",
  "version": "0.1.0",
  "engines": {
    "node": ">= 0.6.0"
  },
  "devDependencies": {
  	"grunt": "~0.4",
    "grunt-jsdoc": "~0.4.2",
    "grunt-contrib-clean": "~0.5.0"
  }
}
```

Install grunt and the needed packages via `npm install`

### Configure Grunt

Create a Gruntfile.js in your package root folder like this:

```JavaScript
module.exports = function (grunt) {
  "use strict";

  grunt.initConfig({

    pkg: '<json:package.json>',

    jsdoc : {
      dist : {
        src: ['source/**/*.js'],
        options: {
          destination: 'documentation/output',
          template: '../jsdoc-template/source/template',
          configure: 'documentation/jsdoc.conf.json'
        }
      }
    },

    clean: {
      documentation: ["documentation/output"]
    }
  });

  grunt.loadNpmTasks('grunt-jsdoc');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('docs', ['clean:documentation', 'jsdoc:dist']);

};

```

### Copy JSDoc example configuration file
This package includes an example configuration file for jsdoc.
You have to copy it into your package and reference it in the
Gruntfile.js jsdoc options.

With the Gruntfile.js above you have to copy the ```jsdoc.conf.example.json```
contained in the ```source``` folder of this package to ```documentation/jsdoc.conf.json```
in your package.

The jsdoc configuration file provides several options to customize 
the output of the template including footers, copy right sections etc.

For more information on docstrap theme configuration [https://github.com/terryweiss/docstrap](Docstrap on Github)

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt](https://github.com/gruntjs/grunt).

## Release History
_(Nothing yet)_

## License
Copyright (c) 2013 Code Adventure
Licensed under the MIT license.
