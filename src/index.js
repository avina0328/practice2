import React from 'react'
import { render } from 'react-dom'
import App from './components/App'
//import webpack from 'webpack'
render(
  <App />,
  document.getElementById('root')
)
/*if ('undefined' === typeof window) {
    module.exports = require('./lib/debug');
  } else {
    module.exports = require('./debug');
  }*/
  //var dom = require("dom");
  //var dom = require("component-dom");
  //new webpack.IgnorePlugin(/^\.\/lib\/debug$/);