import React, { Component } from 'react';
import NavBarContainer from '../containers/NavBarContainer';
import TailEnd from './TailEnd';
import Main from './Main';
import '../css/bootstrap.min.css';
import '../css/font-awesome.min.css';
import '../css/layout.min.css';



class App extends Component {
  render() {
    return (
      <div className="container-fluid">
      <div className="row">
      <NavBarContainer/>
      <Main/>
      <TailEnd/>
      </div>
      </div>
    );
  }
}

export default App;
