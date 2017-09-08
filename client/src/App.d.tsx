//APP STATE
declare interface State {
    transactionList: TransactionData[];
    xc: object;
    // rate: object;
    // currency: ExchangeName[];
    // symbol: object;
    // base: string;
}

declare interface HistoryState {
    transactionList: TransactionData[];
}

declare interface ExchangeState {
    currency: ExchangeName[];
    rates: object;
    rate: number;
}

declare interface ExchangesState {
    rate: number;
    amount: string;
    symbol: object;
    baseCode: string;
    rateCode: string;
}

declare interface ExchangeAmountState {
    amount: string;
}

//EXCHANGE
//Currency
declare interface ExchangeName {
    code: string;
    name: string;
}

//TRANSACTIONS
//Data
declare interface TransactionData {
    reference: string;
    amount: string;
    date: Date;
}

//Actions
declare interface TransactionAction {
    type: string;
    transactionList?: TransactionData[];
    transaction?: TransactionData;
    rate?: string;
    // rates?: object;
    // currency?: object[];
    // symbol?: object;
    // base?: string;
}

//Action creators
declare interface TransactionDispatch {
    AddTransaction: (values: TransactionData) => Function;
}

declare interface ExchangeRate {
    SetExchangeRate: (rate: number) => Function;
}

declare interface ExchangeAmount {
    SetAmount: (amount: string) => Function;
}