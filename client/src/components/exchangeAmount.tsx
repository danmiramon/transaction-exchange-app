import * as React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';
import appActions from '../store/actionCreators';

class ExchangeAmountData extends React.Component<ExchangeAmount & ExchangeAmountState & InjectedFormProps, {}> {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
       this.props.SetAmount('0');
    }

    handleChange(event: React.MouseEvent<HTMLInputElement>) {
        this.props.SetAmount(event.currentTarget.value);
    }

    render() {
        return (
            <Field
                name="amount"
                component="input"
                type="number"
                onChange={e => this.handleChange(e)}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        amount: state.exchangeReducer.amount
    };
};

const mapDispatchToProps = (dispatch: Function) => {
    return {
        SetAmount: (amount: string) => dispatch(appActions.setAmount(amount))
    };
};

let ExchangeAmountForm = reduxForm({
    form: 'exchangeAmount',
    initialValues: {
        amount: '0'
    }
})(ExchangeAmountData);

export default connect<ExchangeAmountState, any, void>(mapStateToProps, mapDispatchToProps)(ExchangeAmountForm);