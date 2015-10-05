# grunt-supported-browsers

Shows you what browsers you currently support based on your browserlist config.

## Getting Started
This plugin requires Grunt `>=0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-supported-browsers --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-supported-browsers');
```

## The supportedBrowsers task
_Run this task with the `grunt supportedBrowsers` command._

### Options

This task defined the following options:

#### browsers
Type: `Array`
Default value: an array with [default browsers](https://github.com/ai/browserslist)

You can specify browsers actual for your project using this option:

```js
options: {
  browsers: ['last 2 versions', 'ie 8', 'ie 9']
}
```

Or using a global config file named `browserslist` at the root of your project:

```
# Browsers that we support

> 5% in US
Last 2 versions
```

Read more about browserslist [here](https://github.com/ai/browserslist).

## Updating the browser database

```
$ npm update --depth=999999 caniuse-db
```

## License

Copyright (c) 2015 hosting.de GmbH. Licensed under the MIT license.
