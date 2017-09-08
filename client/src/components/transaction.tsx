import * as React from 'react';
import { withRouter } from 'react-router-dom';
import TransactionForm from './transactionForm';
import { connect } from 'react-redux';
import appActions from '../store/actionCreators';
import './transaction.css';

class Transaction extends React.Component<TransactionDispatch, {}> {
    render() {
        return(
            <div>
                <h1>Add a Transaction</h1>
                <TransactionForm onSubmit={this.props.AddTransaction} />
            </div>
        );
    }
}

const mapStateToProps = () => { return {}; };

const mapDispatchToProps = (dispatch: Function) => {
    return {
        AddTransaction: (values: TransactionData) => dispatch(appActions.addTransaction(values))
    };
};

export default withRouter(connect<{}, TransactionDispatch, void>(mapStateToProps, mapDispatchToProps)(Transaction));