import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem,Button } from 'reactstrap';
import LoginFormContainer from '../containers/LoginFormContainer';
import CreateAccount from './CreateAccount';
import RecoverAccount from './RecoverAccount';
import '../css/bootstrap.min.css'
import '../css/font-awesome.min.css';
import '../css/layout.min.css';



class NavBar extends React.Component {

  state = {
    dropdownOpen:false,
    dropdownOpen2:false,
    dropdownOpen3:false,
  }

  handleClick  = (val) => {

    console.log(val)

    if(val === 1)
    {

      this.toggle();
      this.toggle2();
    }

    else if(val === 2)
    {
      this.toggle2();
      this.toggle();
    }
  }

  handleClick2  = () => {

    this.toggle3();
    this.toggle();


  }

  toggle = () => {
    this.setState({dropdownOpen:!this.state.dropdownOpen});
  }

  toggle2 = () => {
    this.setState({dropdownOpen2:!this.state.dropdownOpen2});


  }

  toggle3 = () => {


    this.setState({dropdownOpen3:!this.state.dropdownOpen3});

  }

  componentWillReceiveProps(nextProps)
  {
  //console.log(nextProps.data.userData);

    if(nextProps.data.recoverPassword)
    {
      this.toggle();
      this.setState({dropdownOpen3:nextProps.data.recoverPassword});
      nextProps.data.recoverPassword=false;
    }

  }






  render(){

    const {location} = this.props;
    var isLoggedIn= this.props.data.login;
    let navItemVersion=null;

    console.log(isLoggedIn);

    if(isLoggedIn === 'accepted')
    {
      navItemVersion =
        <div>
          <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle className="deck-file" data-account="#deckfile"/>
          </Dropdown>
          <Dropdown isOpen={this.state.dropdownOpen2} toggle={this.toggle2}>
            <DropdownToggle className="deckuser" data-account="#userpanel"/>
          </Dropdown>
          <Dropdown>
            <DropdownToggle className="button share" data-account="#shareitem">Share</DropdownToggle>
          </Dropdown>
        </div>
    }

    else
    {
      navItemVersion =
        <div>
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle className='button signin right-margin' data-account="#signin">
            Sign In
          </DropdownToggle>
          <DropdownMenu>
            <div className='account-holder dropdown-item' id="signin">
              <div className='ah-head'><h6>Log In</h6><a onClick={this.toggle} className="ah-close"></a></div>
              <div className='ah-content'>
                <LoginFormContainer/>
                <div className="ah-button">
                  <button className="button create" onClick={(val=1) => this.handleClick(val=1)} data-account="#signup">Create Account</button>
                </div>
              </div>
            </div>
          </DropdownMenu>
        </Dropdown>
        <Dropdown isOpen={this.state.dropdownOpen3} toggle={this.toggle3}>
          <DropdownToggle className='button2 right-margin2'>
          </DropdownToggle>
          <DropdownMenu>
            <div className="account-holder dropdown-item" id="forgotaccount">
              <div className="ah-head"><a onClick={this.handleClick2} className="ah-back" data-account="#signin"></a><h6>Recover Account</h6><a onClick={this.toggle3} className="ah-close"></a></div>
              <div className="ah-description">
                <h6>How to recover your account</h6>
                <p>Enter your email address you signed up to <br/>Dynamic Deck with. We’ll send you a special link<br/>to recover your account.</p>
              </div>
              <div className="ah-content">
                <RecoverAccount/>
              </div>
            </div>
          </DropdownMenu>
        </Dropdown>
        <Dropdown isOpen={this.state.dropdownOpen2} toggle={this.toggle2}>
          <DropdownToggle className="button signup" data-account="#signup">
            Sign Up
          </DropdownToggle>
          <DropdownMenu>
            <div className="account-holder dropdown-item" id="signup">
              <div className="ah-head"><h6>Create Account</h6><a onClick={this.toggle2} className="ah-close"></a></div>
              <div className="ah-description">
                <h6>Two Accounts Types</h6>
                <p>Entrepreneur accounts allow you to create<br/>Dynamic Decks. Investor accounts are used to <br/>view and track Decks.</p>
              </div>
              <div className="ah-content">
                <CreateAccount/>
                <div className="ah-button">
                  <button className="button create" onClick={(val=2) => this.handleClick(val=2)} data-account="#signin">Log In</button>
                </div>
              </div>
            </div>
          </DropdownMenu>
        </Dropdown>
      </div>
    }



    return (
      <header className="header">
        <div className="container">
          <div className="row">
            <div className="main-head-wrapper">
              <div className="navbar-menu">
                  <ul className="deck-tabs">
                    <li><Link className={location.pathname === '/Decks' ? 'nav-deck active' : 'nav-deck'} to='/Decks' data-tab="#tab-deck" /></li>
                    <li><Link className={location.pathname === '/Attachments' ? 'nav-attach active' : 'nav-attach'} to='/Attachments' data-tab="#tab-attach" /></li>
                    <li><Link className={location.pathname === '/Insights' ? 'nav-insights active' : 'nav-insights'}  to='/Insights'data-tab="#tab-insights" /></li>
                    <li><Link className={location.pathname === '/DeckUpdates' ? 'nav-updates active' : 'nav-updates'} to='/DeckUpdates' data-tab="#tab-updates" /></li>
                    <li><Link className="nav-print" to=''/></li>
                  </ul>
              </div>
              <figure className="deck-logo"><img src={require('../images/logo.png')} alt="Dynamic Deck"/></figure>
              <div className="main-head-right">
                <div className="mobile-toggle" id="mobiletoggle">
                  {navItemVersion}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

    )
  }
}



export default NavBar;
