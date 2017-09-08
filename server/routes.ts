import * as express from 'express';
import * as request from 'request';
import {Transaction} from './models';

export function getTransactions(req: express.Request, res: express.Response) {
    Transaction.find({}, function(err, trans) {
        if(err) {
            throw(err);
        }

        res.json(trans);
    });
}

export function addTransaction(req: express.Request, res: express.Response, next: express.NextFunction) {
    let record = new Transaction();
    record.date = req.body.date;
    record.reference = req.body.reference;
    record.amount = req.body.amount;

    record.save(function(err, trans) {
        if(err) {
            return next(err);
        }
    });

    res.json(record);
}

export function getRates(req: express.Request, res: express.Response) {
    request({
            url: 'https://openexchangerates.org/api/latest.json?app_id=87d3cdbfd96a46a6974dcb114630dcdc',
            json: true
        },
        function(error, response, body) {
            if(!error && response.statusCode === 200) {
                res.json(body);
            }
        }
    );
}

export function getCurrencies(req: express.Request, res: express.Response) {
    request({
            url: 'https://openexchangerates.org/api/currencies.json?app_id=87d3cdbfd96a46a6974dcb114630dcdc',
            json: true
        },
        function(error, response, body) {
            if(!error && response.statusCode === 200) {
                res.json(body);
            }
        }
    );
}

export function getCurrencySymbol(req: express.Request, res: express.Response) {
    request({
            url: 'http://www.localeplanet.com/api/auto/currencymap.json',
            json: true
        },
        function(error, response, body) {
            if(!error && response.statusCode === 200) {
                res.json(body);
            }
        }
    );
}