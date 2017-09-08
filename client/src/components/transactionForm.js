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
var redux_form_1 = require("redux-form");
var TransactionForm = (function (_super) {
    __extends(TransactionForm, _super);
    function TransactionForm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TransactionForm.prototype.render = function () {
        var handleSubmit = this.props.handleSubmit;
        return (<form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="reference">Reference</label>
                    <redux_form_1.Field name="reference" component="input" type="text"/>
                </div>
                <div>
                    <label htmlFor="amount">Amount</label>
                    <redux_form_1.Field name="amount" component="input" type="number"/>
                </div>
                <button>Submit</button>
            </form>);
    };
    return TransactionForm;
}(React.Component));
exports.default = redux_form_1.reduxForm({
    form: 'transaction'
})(TransactionForm);
