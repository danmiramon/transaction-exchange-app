import * as React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import './history.css';

class TranHistory extends React.Component<State, {}> {
    render() {
        let data = this.props.transactionList.map((entry, index) => (
                <tr key={index}>
                    <td>{new Date(entry.date).toLocaleDateString()}</td>
                    <td>{entry.reference}</td>
                    <td>${parseFloat(entry.amount).toFixed(2)}</td>
                </tr>
            )
        );

        return(
            <div>
                <h1>History</h1>
                <table className="history">
                    <thead>
                        <tr>
                            <td>Date</td>
                            <td>Reference</td>
                            <td>Amount</td>
                        </tr>
                    </thead>
                    <tbody>
                        {data}
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return ({
        transactionList: state.transactionReducer.transactionList
    });
};

const mapDispatchToProps = () => { return {}; };

export default withRouter(connect<HistoryState, {}, void>(mapStateToProps, mapDispatchToProps)(TranHistory));