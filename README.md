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

# Udacity Review

### Meets Specifications
*Congratulations on completing the project! :clap: :boom: :tada:*
*You did a great job to include all stats and all were working perfectly! I am the previous reviewer and I am happy to see you make progress.*
*Best of luck for future! :clap:*
*I LOOK FORWARD TO HEAR FROM YOU IN YOUR FEEDBACK*.
These are the best practices you should follow to be a great web developer :
https://blog.usejournal.com/what-makes-a-good-developer-80330712e22

## Development Environment and Architecture
**The project should have a structure like the one shown below. All files shown must be present (Webpack may be split into multiple config files, and names may differ) and the app must successfully render a home page with clear design and functionality added when index.html is loaded in the browser. No errors should display in console.**
```
- Root:
  - `package.json`
  - `readme.md`
  - `webpack.config.js`
  - src folder
    - server folder
      - `server.js` (name will vary)
    - client folder
      - `index.js`
      - html/views folder
        - `index.html`
      - js folder
        - `app.js` (name will vary)
      - styles folder
        - `style.scss` (name will vary - may be broke into partials)
```

**Webpack config should contain at least 3 scripts, express server, build and test. Additionally, dev server may be included.*

*There should be at least one test for the express server and application javascript*

*The project must have service workers installed.*

## HTML & CSS
**All features are usable across modern desktop, tablet, and phone browsers.**

**Styling is set up in a logical way. All interactive elements have hover states.**

**HTML structure should be indented properly with classes and ID’s that make sense.**

**The design should clearly be different from the design used in projects 3 and 4.**

## API and JS Integration
Server should be a near duplication of project 3 with the exception of additional added member: value pairs.

At least one function should be imported.
At least one event listener should be imported.
(styles referenced in html/css)
There should be URLS and API Keys for at least 3 APIs, including Geonames, Weatherbit, and Pixabay. You can feel free to use more than 3 APIs.
There should be a primary object with placeholder member value pairs.
There should be a primary function that is exported to index.js.
At least one option from the Extend your Project/Ways to Stand Out sections have been added. Please add a Note to your reviewer which one you chose to implement, or add into your README.

## Documentation
A README file is included detailing the app and all dependencies.

## Other requirements:
The Readme file should have non-default text in it that is specific to this project. It doesn’t have to be thorough, but should have some basic info. Bonus points if correct markdown is used.

Comments are present and effectively explain longer code procedure when necessary.

Code is formatted with consistent, logical, and easy-to-read formatting as described in the Udacity JavaScript Style Guide.

