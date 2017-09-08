"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("./constants");
var redux_1 = require("redux");
var redux_form_1 = require("redux-form");
var update = require("immutability-helper");
var initialState = {
    transactionList: []
};
var transactionReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case constants_1.default.GET_TRANSACTIONS:
            return { transactionList: action.transactionList };
        case constants_1.default.ADD_TRANSACTION:
            return update(state, { transactionList: { $push: [action.transaction] } });
        default:
            return state;
    }
};
var rootReducer = redux_1.combineReducers({
    transactionReducer: transactionReducer,
    form: redux_form_1.reducer
});
exports.default = rootReducer;
