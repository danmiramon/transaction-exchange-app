import * as React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';
import appActions from '../store/actionCreators';

class ExchangeCurrency extends React.Component<ExchangeState & ExchangeRate & InjectedFormProps, {}> {
    currencyRates: number[];
    constructor() {
        super();
        this.currencyRates = [1, 1];

        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.props.SetExchangeRate(1);
    }

    handleChange(event: React.MouseEvent<HTMLInputElement>, position: number) {
        this.currencyRates[position] = this.props.rates[event.currentTarget.value];
        this.props.SetExchangeRate(this.currencyRates[1] / this.currencyRates[0]);
    }

    render() {
        let options = this.props.currency.map((currency, index) => (
                <option key={index} value={currency.code}>{currency.code} - {currency.name}</option>
            )
        );

        return (
            <tr>
                <td>
                    <Field name="baseCode" component="select" onChange={e => this.handleChange(e, 0)}>
                        {options}
                    </Field>
                </td>
                <td>
                    <Field name="rateCode" component="select" onChange={e => this.handleChange(e, 1)}>
                        {options}
                    </Field>
                </td>
                <td>
                    {this.props.rate.toFixed(4)}
                </td>
            </tr>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        currency: state.exchangeReducer.currency,
        rates: state.exchangeReducer.rates,
        rate: state.exchangeReducer.rate
    };
};

const mapDispatchToProps = (dispatch: Function) => {
    return {
        SetExchangeRate: (rate: number) => dispatch(appActions.setRate(rate))
    };
};

let ExchangeCurrencyForm = reduxForm({
    form: 'exchangeCurrency',
    initialValues: {
        baseCode: 'USD',
        rateCode: 'USD',
    }
})(ExchangeCurrency);

export default connect<ExchangeState, any, void>(mapStateToProps, mapDispatchToProps)(ExchangeCurrencyForm);