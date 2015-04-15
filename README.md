# Ember-cli-content-for-config

This addon allows you to use the `{{content-for }}` helper in your `app/index.html` file to interoplate values from the `config/enviroment.js` config object into the `index.html` file.

This is useful if you need to include different config values in your `index.html` file based on the build enviroment.


## Installation

* `ember install:addon ember-cli-content-for-config`

## Usage

First set any values you may wish to display on the config object in `config/enviroment.js`:

```js
/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    title: 'My Sweet App',
    description: 'This app is sweet',
    version: require('../package.json').version,
    analytics: {
      google_analytics_id: 'UA-abc123-x',
    },
    modulePrefix: 'my-sweet-app',
    environment: environment,
    // ...
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ...
  }

  if (environment === 'test') {
    // ...
  }

  if (environment === 'production') {
    // ...
  }

  return ENV;
};
```

Then you can reference the config values in your index.html by with `content-for` using the key `config.` followed by the path to the property. For example, to interpolate the version you would use `{{content-for 'config.version'}}`.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>{{content-for 'config.title'}}</title>
    <meta name="description" content="{{content-for 'config.description'}}">
    <meta name="version" content="{{content-for 'config.version'}}">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    {{content-for 'head'}}

    <link rel="stylesheet" href="assets/vendor.css">
    <link rel="stylesheet" href="assets/my-sweet-app.css">

    {{content-for 'head-footer'}}
  </head>
  <body>
    {{content-for 'body'}}

    <script src="assets/vendor.js"></script>
    <script src="assets/my-sweet-app.js"></script>
    <script>
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

      ga('create', '{{content-for 'config.google_analytics_id'}}', 'auto');
      ga('send', 'pageview');
    </script>

    {{content-for 'body-footer'}}
  </body>
</html>
```

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
