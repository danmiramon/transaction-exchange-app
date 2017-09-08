"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("./constants");
var redux_form_1 = require("redux-form");
var headers = new Headers();
headers.append('Content-Type', 'application/json');
var appActions = {
    addTransaction: function (values) {
        return function (dispatch) {
            fetch('/addTransaction', {
                method: 'post',
                headers: headers,
                body: JSON.stringify({
                    reference: values.reference,
                    amount: values.amount,
                    date: new Date()
                })
            })
                .then(function (response) {
                return response.json();
            })
                .then(function (dataResponse) {
                dispatch(redux_form_1.reset('transaction'));
                dispatch({
                    type: constants_1.default.ADD_TRANSACTION,
                    transaction: dataResponse
                });
            });
        };
    },
    requestTransactions: function () {
        return function (dispatch) {
            fetch('/fetchTransactions')
                .then(function (response) {
                return response.json();
            })
                .then(function (dataResponse) {
                dispatch({
                    type: constants_1.default.GET_TRANSACTIONS,
                    transactionList: dataResponse
                });
            });
        };
    },
    requestRates: function () {
        return function (dispatch) {
            fetch('/fetchRates')
                .then(function (response) {
                return response.json();
            })
                .then(function (dataResponse) {
                console.dir(dataResponse);
            });
        };
    },
    requestCurrencies: function () {
        return function (dispatch) {
            fetch('/fetchCurrencies')
                .then(function (response) {
                return response.json();
            })
                .then(function (dataResponse) {
                console.dir(dataResponse);
            });
        };
    },
    requestCurrencySymbol: function () {
        return function (dispatch) {
            fetch('/fetchCurrencySymbol')
                .then(function (response) {
                return response.json();
            })
                .then(function (dataResponse) {
                console.dir(dataResponse);
            });
        };
    }
};
exports.default = appActions;
