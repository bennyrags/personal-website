import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
//import PortfolioList from '../PortfolioList/PortfolioList'
import { HashRouter as Router, Route } from 'react-router-dom';
import Admin from '../Admin/Admin'
import Splash from '../Splash/Splash'
import Work from '../Work/Work'
import Nav from '../Nav/Nav';


class App extends Component {



  // Renders the entire app on the DOM
  render() {
    return (
    
      //App consists of two main pages, or views, as represented below
      <div className="App">
        <Router>
          <Nav />
          <Route exact path='/' component={Splash} />
          <Route path='/admin' component={Admin} />
          <Route path='/work' component={Work} />
        </Router>
      </div>

    );
  }
}

const mapReduxStateToProps = reduxState => ({
  reduxState,
})

export default connect(mapReduxStateToProps)(App);
