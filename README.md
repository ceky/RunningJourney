# Running Journey

A collection of photos from all the running competitions I took part of.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

Then open this url: http://localhost:8080/#/

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Deploy to surge.sh

First run ```npm run build``` and then write ```surge``` and add the project path to /dist

http://ceky-running.surge.sh

## Tools used

- Vue.js

The framework used to develop the application

- Magnific popup

Using magnific popup for opening the images in a gallery http://dimsemenov.com/plugins/magnific-popup/

- Lozad

Using lozad to load only the cover images of the albums that appear in the viewport (lazy loading). This library is using IntersectionObserver.
https://github.com/ApoorvSaxena/lozad.js

- Animate.css

Using animate.css to animate the album elements and the logo