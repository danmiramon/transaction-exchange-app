import * as React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Transaction from './components/transaction';
import TranHistory from './components/history';
import Exchange from './components/exchanges';
import appActions from './store/actionCreators';
import appStore from './store/store';
import './App.css';

const logo = require('./logo.png');

class App extends React.Component {

  componentDidMount() {
      appStore.dispatch(appActions.requestTransactions());
      appStore.dispatch(appActions.requestRates());
      appStore.dispatch(appActions.requestCurrencies());
      appStore.dispatch(appActions.requestCurrencySymbol());
  }

  render() {
    return (
      <Router>
          <div className="App">
              <div className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <h2>Welcome to My Transactions App</h2>
                  <ul className="App-nav">
                      <li><Link to="/">Home</Link></li>
                      <li><Link to="/history">History</Link></li>
                      <li><Link to="/exchange">Exchange Calculator</Link></li>
                  </ul>
              </div>
              <div className="App-intro">
                  <Route exact path="/" component={Transaction} />
                  <Route path="/history" component={TranHistory} />
                  <Route path="/exchange" component={Exchange} />
              </div>
          </div>
      </Router>
    );
  }
}

export default App;
