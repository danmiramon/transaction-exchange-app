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
var transactionForm_1 = require("./transactionForm");
var react_redux_1 = require("react-redux");
var actionCreators_1 = require("../store/actionCreators");
var Transaction = (function (_super) {
    __extends(Transaction, _super);
    function Transaction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Transaction.prototype.render = function () {
        return (<div>
                <h1>Add a transaction</h1>
                <transactionForm_1.default onSubmit={this.props.AddTransaction}/>
            </div>);
    };
    return Transaction;
}(React.Component));
var mapStateToProps = function () { return {}; };
var mapDispatchToProps = function (dispatch) {
    return {
        AddTransaction: function (values) { return dispatch(actionCreators_1.default.addTransaction(values)); }
    };
};
exports.default = react_router_dom_1.withRouter(react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Transaction));
