"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var logger = require("morgan");
var cookieParser = require("cookie-parser");
var mongoose = require("mongoose");
var routes = require("./server/routes");
var server = express();
server.set('port', process.env.PORT || 3001);
var dbURL = process.env.MONGOQ_URL || 'mongodb://@localhost:27017/trans';
var db = mongoose.connect(dbURL);
server.use(logger('dev'));
server.use(cookieParser());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
if (process.env.NODE_ENV === 'production') {
    server.use(express.static(path.join(__dirname, 'client/build')));
}
server.get('/fetchTransactions', routes.getTransactions);
server.post('/addTransaction', routes.addTransaction);
server.get('/fetchRates', routes.getRates);
server.get('/fetchCurrencies', routes.getCurrencies);
server.get('/fetchCurrencySymbol', routes.getCurrencySymbol);
server.listen(server.get('port'), function () {
    console.log("Listening at port " + server.get('port') + "...");
});
