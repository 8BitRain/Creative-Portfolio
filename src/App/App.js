import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from 'react-router-dom'

import logo from './logo.svg';
import panther from './Panther.svg';
import './App.css';
import About from './About/About';
import Work from './Work/Work'

class App extends Component {
  constructor(props) {
   super(props);
   this.state = {renderSection: false};

 }

  aboutPressed(){
    this.setState(prevState => ({
     renderSection: !prevState.renderSection
   }));
  }

  render() {
    return (
      <Router>
        <div className="App">
          {/*Header*/}
          <div className="App-header">
                <NavLink to="/work"> <p className="App-header-text-work">WORK</p></NavLink>
                <img src={panther} className="App-logo" alt="logo" />
                <NavLink to="/about" activeClassName="selectedLink"><p className="App-header-text-about">ABOUT</p></NavLink>
          </div>
          {/*Content*/}
          <Route path="/about" component={About}/>
          <Route path="/work" component={Work}/>

        </div>
      </Router>
    );
  }
}

export default App;
