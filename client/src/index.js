"use strict";
/// <reference path="./App.d.tsx"/>
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDOM = require("react-dom");
var react_redux_1 = require("react-redux");
var store_1 = require("./store/store");
var App_1 = require("./App");
var registerServiceWorker_1 = require("./registerServiceWorker");
require("./index.css");
ReactDOM.render(<react_redux_1.Provider store={store_1.default}>
      <App_1.default />
  </react_redux_1.Provider>, document.getElementById('root'));
registerServiceWorker_1.default();
