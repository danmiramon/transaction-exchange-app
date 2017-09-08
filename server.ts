import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as path from 'path';
import * as logger from 'morgan';
import * as cookieParser from 'cookie-parser';
import * as mongoose from 'mongoose';
import * as routes from './server/routes';

let server: express.Express = express();
server.set('port', process.env.PORT || 3001);

let dbURL: string = process.env.MONGOQ_URL || 'mongodb://@localhost:27017/trans';
let db: mongoose.MongooseThenable = mongoose.connect(dbURL);

server.use(logger('dev'));
server.use(cookieParser());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));

if(process.env.NODE_ENV === 'production') {
    server.use(express.static(path.join(__dirname, 'client/build')));
}

server.get('/fetchTransactions', routes.getTransactions);
server.post('/addTransaction', routes.addTransaction);
server.get('/fetchRates', routes.getRates);
server.get('/fetchCurrencies', routes.getCurrencies);
server.get('/fetchCurrencySymbol', routes.getCurrencySymbol);

server.listen(server.get('port'), function() {
    console.log(`Listening at port ${server.get('port')}...`)
});