# Travel Journal App
This webapp uses data from three different APIs to help you plan a trip to a location.

First the Client has a form that collects the Date and location information.

Then the server will fetch to get the latitude longitue and country information from the Geonames API.

Then that data is used to get the current weather from Weatherbit API.

The location information is also used to find a picture to display from the Pixabay API.


## Dependencies

###webpack
At its core, webpack is a static module bundler for modern JavaScript applications. When webpack processes your application, it internally builds a dependency graph which maps every module your project needs and generates one or more bundles.

###html-webpack-plugin
This is a webpack plugin that simplifies creation of HTML files to serve your webpack bundles. This is especially useful for webpack bundles that include a hash in the filename which changes every compilation. You can either let the plugin generate an HTML file for you, supply your own template using lodash templates or use your own loader.

###clean-webpack-plugin
By default, this plugin will remove all files inside webpack's output.path directory, as well as all unused webpack assets after every successful rebuild.

###path
The path module provides utilities for working with file and directory paths.

###Mmini-css-extract-plugin
This plugin extracts CSS into separate files. It creates a CSS file per JS file which contains CSS. It supports On-Demand-Loading of CSS and SourceMaps.

It builds on top of a new webpack v5 feature and requires webpack 5 to work.

###workbox-webpack-plugin
Workbox provides two webpack plugins: one that generates a complete service worker for you and one that generates a list of assets to precache that is injected into a service worker file

###TerserWebpackPlugin
If you are using webpack v5 or above you do not need to install this plugin. Webpack v5 comes with the latest terser-webpack-plugin out of the box

###css-minimizer-webpack-plugin
This plugin uses cssnano to optimize and minify your CSS.

Just like optimize-css-assets-webpack-plugin but more accurate with source maps and assets using query string, allows to cache and works in parallel mode.
