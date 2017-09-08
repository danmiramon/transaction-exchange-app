import constants from './constants';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import * as update from 'immutability-helper';

let initialState: State = {
    transactionList: [],
    xc: {
        rates: {},
        currency: [],
        symbol: {
            USD: {
                symbol_native: '$'
            }
        },
        rate: 1,
        amount: '0'
    }
};

const transactionReducer = (state = initialState.transactionList, action) => {
    switch (action.type) {
        case constants.GET_TRANSACTIONS:
            return {transactionList: action.transactionList};
        case constants.ADD_TRANSACTION:
            return update(state, {transactionList: {$push: [action.transaction]}});
        default:
            return state;
    }
};

const exchangeReducer = (state = initialState.xc, action) => {
    switch (action.type) {
        case constants.GET_RATES:
            return update(state, {rates: {$set: action.rates}});
        case constants.GET_CURRENCY:
            return update(state, {currency: {$set: action.currency}});
        case constants.GET_SYMBOL:
            return update(state, {symbol: {$set: action.symbol}});
        case constants.SET_RATE:
            return update(state, {rate: {$set: action.rate}});
        case constants.SET_AMOUNT:
            return update(state, {amount: {$set: action.amount}});
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    transactionReducer: transactionReducer,
    exchangeReducer: exchangeReducer,
    form: formReducer
});

export default rootReducer;