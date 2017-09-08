"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var request = require("request");
var models_1 = require("./models");
function getTransactions(req, res) {
    models_1.Transaction.find({}, function (err, trans) {
        if (err) {
            throw (err);
        }
        res.json(trans);
    });
}
exports.getTransactions = getTransactions;
function addTransaction(req, res, next) {
    var record = new models_1.Transaction();
    record.date = req.body.date;
    record.reference = req.body.reference;
    record.amount = req.body.amount;
    record.save(function (err, trans) {
        if (err) {
            return next(err);
        }
    });
    res.json(record);
}
exports.addTransaction = addTransaction;
function getRates(req, res) {
    request({
        url: 'https://openexchangerates.org/api/latest.json?app_id=87d3cdbfd96a46a6974dcb114630dcdc',
        json: true
    }, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            res.json(body);
        }
    });
}
exports.getRates = getRates;
function getCurrencies(req, res) {
    request({
        url: 'https://openexchangerates.org/api/currencies.json?app_id=87d3cdbfd96a46a6974dcb114630dcdc',
        json: true
    }, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            res.json(body);
        }
    });
}
exports.getCurrencies = getCurrencies;
function getCurrencySymbol(req, res) {
    request({
        url: 'http://www.localeplanet.com/api/auto/currencymap.json',
        json: true
    }, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            res.json(body);
        }
    });
}
exports.getCurrencySymbol = getCurrencySymbol;
