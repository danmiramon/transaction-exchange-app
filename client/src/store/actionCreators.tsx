import constants from './constants';
import { reset } from 'redux-form';

let headers = new Headers();
headers.append('Content-Type', 'application/json');

const appActions = {
    addTransaction(values: TransactionData) {
        return (dispatch: Function) => {
            fetch('/addTransaction', {
                method: 'post',
                headers: headers,
                body: JSON.stringify({
                    reference: values.reference,
                    amount: values.amount,
                    date: new Date()
                })
            })
            .then(response => {
                return response.json();
            })
            .then(dataResponse => {
                dispatch(reset('transaction'));
                dispatch({
                    type: constants.ADD_TRANSACTION,
                    transaction: dataResponse
                });
            });
        };
    },

    requestTransactions() {
        return (dispatch: Function) => {
            fetch('/fetchTransactions')
            .then(response => {
                return response.json();
            })
            .then(dataResponse => {
                dispatch({
                    type: constants.GET_TRANSACTIONS,
                    transactionList: dataResponse
                });
            });
        };
    },

    requestRates() {
        return (dispatch: Function) => {
            fetch('/fetchRates')
            .then(response => {
                return response.json();
            })
            .then(dataResponse => {
                dispatch({
                    type: constants.GET_RATES,
                    rates: dataResponse.rates
                });
            });
        };
    },

    requestCurrencies() {
        return (dispatch: Function) => {
            fetch('/fetchCurrencies')
            .then(response => {
                return response.json();
            })
            .then(dataResponse => {
                let currencies = Object.keys(dataResponse).map(key => {
                    return {
                        code: key,
                        name: dataResponse[key]
                    };

                });
                dispatch({
                    type: constants.GET_CURRENCY,
                    currency: currencies
                });
            });
        };
    },

    requestCurrencySymbol() {
        return (dispatch: Function) => {
            fetch('/fetchCurrencySymbol')
            .then(response => {
                return response.json();
            })
            .then(dataResponse => {
                dispatch({
                    type: constants.GET_SYMBOL,
                    symbol: dataResponse
                });
            });
        };
    },

    setRate(rate: number) {
        return {
            type: constants.SET_RATE,
            rate: rate
        };
    },

    setAmount(amount: string) {
        return {
            type: constants.SET_AMOUNT,
            amount: amount
        };
    }
};

export default appActions;