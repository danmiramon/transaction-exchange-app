"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
var react_redux_1 = require("react-redux");
var TranHistory = (function (_super) {
    __extends(TranHistory, _super);
    function TranHistory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TranHistory.prototype.render = function () {
        var data = this.props.transactionList.map(function (entry, index) { return (<tr key={index}>
                    <td>{new Date(entry.date).toLocaleDateString()}</td>
                    <td>{entry.reference}</td>
                    <td>${parseFloat(entry.amount).toFixed(2)}</td>
                </tr>); });
        return (<div>
                <h1>History</h1>
                <table>
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
            </div>);
    };
    return TranHistory;
}(React.Component));
var mapStateToProps = function (state) {
    return ({
        transactionList: state.transactionReducer.transactionList
    });
};
var mapDispatchToProps = function () { return {}; };
exports.default = react_router_dom_1.withRouter(react_redux_1.connect(mapStateToProps, mapDispatchToProps)(TranHistory));
