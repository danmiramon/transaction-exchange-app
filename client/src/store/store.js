"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var redux_thunk_1 = require("redux-thunk");
var reducers_1 = require("./reducers");
var appStore = redux_1.createStore(reducers_1.default, redux_1.applyMiddleware(redux_thunk_1.default));
exports.default = appStore;
