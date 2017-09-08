import * as React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';
import ExchangeCurrencyForm from './exchangeCurrency';
import ExchangeAmountForm from './exchangeAmount';
import './exchange.css';

const selector = formValueSelector('exchangeCurrency');

class Exchange extends React.Component<ExchangesState, {}> {
    baseSymbol: string;
    rateSymbol: string;

    constructor() {
        super();
        this.baseSymbol = '$';
    }

    render() {
        this.baseSymbol = this.props.baseCode && this.props.symbol[this.props.baseCode] ?
            this.props.symbol[this.props.baseCode].symbol_native : '$';
        this.rateSymbol = this.props.rateCode && this.props.symbol[this.props.rateCode] ?
            this.props.symbol[this.props.rateCode].symbol_native : '$';
        return(
            <div>
                <h1>Exchange Rates</h1>
                <table className="exchange">
                    <thead>
                        <tr>
                            <td>From</td>
                            <td>To</td>
                            <td>Rate</td>
                        </tr>
                    </thead>
                    <tbody>
                        <ExchangeCurrencyForm/>
                        <tr>
                            <td>
                                {this.baseSymbol}<ExchangeAmountForm/>
                            </td>
                            <td>
                                {this.rateSymbol}
                                {(this.props.rate * parseFloat(this.props.amount)).toFixed(2)}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        rate: state.exchangeReducer.rate,
        amount: state.exchangeReducer.amount,
        symbol: state.exchangeReducer.symbol,
        baseCode: selector(state, 'baseCode'),
        rateCode: selector(state, 'rateCode')
    };
};

const mapDispatchToProps = () => ({});

export default withRouter(connect<ExchangesState, {}, void>(mapStateToProps, mapDispatchToProps)(Exchange));