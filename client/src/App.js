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
var transaction_1 = require("./components/transaction");
var history_1 = require("./components/history");
var exchanges_1 = require("./components/exchanges");
var actionCreators_1 = require("./store/actionCreators");
var store_1 = require("./store/store");
require("./App.css");
var logo = require('./logo.png');
var App = (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.componentDidMount = function () {
        store_1.default.dispatch(actionCreators_1.default.requestTransactions());
        store_1.default.dispatch(actionCreators_1.default.requestRates());
        store_1.default.dispatch(actionCreators_1.default.requestCurrencies());
        store_1.default.dispatch(actionCreators_1.default.requestCurrencySymbol());
    };
    App.prototype.render = function () {
        return (<react_router_dom_1.BrowserRouter>
          <div className="App">
              <div className="App-header">
                  <img src={logo} className="App-logo" alt="logo"/>
                  <h2>Welcome to My Transactions App</h2>
                  <ul>
                      <li><react_router_dom_1.Link to="/">Home</react_router_dom_1.Link></li>
                      <li><react_router_dom_1.Link to="/history">History</react_router_dom_1.Link></li>
                      <li><react_router_dom_1.Link to="/exchange">Exchange Calculator</react_router_dom_1.Link></li>
                  </ul>
              </div>
              <div className="App-intro">
                  <react_router_dom_1.Route exact path="/" component={transaction_1.default}/>
                  <react_router_dom_1.Route path="/history" component={history_1.default}/>
                  <react_router_dom_1.Route path="/exchange" component={exchanges_1.default}/>
              </div>
          </div>
      </react_router_dom_1.BrowserRouter>);
    };
    return App;
}(React.Component));
exports.default = App;
