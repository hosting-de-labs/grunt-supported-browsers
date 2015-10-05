'use strict';

var browserslist = require('browserslist');
var isUndefined = require('lodash.isundefined');
var browserNames = require('./browser-names.json');

function formatBrowserName(browser) {
    if (!browserNames[browser]) {
        return browser;
    }

    return browserNames[browser];
}

function browserMapToArray(browserMap) {
    var array = [];
    for (var entry in browserMap) {
        array.push({name: formatBrowserName(entry), internalName: entry, versions: browserMap[entry]});
    }

    return array;
}

module.exports = function(grunt) {
    grunt.registerTask('supportedBrowsers', 'Show which browsers we currently support', function supportedBrowsers() {
        var browserSpec = grunt.config.get('supportedBrowsers.browsers');
        var browsers = browserslist(browserSpec, {path: process.cwd()});

        var aggregated = browsers.map(function(browser) {
            return browser.split(' ');
        }).reduce(function(data, browser) {
            var browserName = browser[0];
            var browserVersion = browser[1];

            if (isUndefined(data[browserName])) {
                data[browserName] = [];
            }
            data[browserName].unshift(browserVersion);

            return data;
        }, Object.create(null));

        browserMapToArray(aggregated).forEach(function(browser) {
            grunt.log.writeln(browser.name + ' ' + grunt.log.wordlist(browser.versions));
        });
    });
};
