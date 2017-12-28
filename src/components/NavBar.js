import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem,Button } from 'reactstrap';
import LoginFormContainer from '../containers/LoginFormContainer';
import DeckUserContainer from '../containers/DeckUserContainer';
import CreateAccount from './CreateAccount';
import RecoverAccount from './RecoverAccount';
import '../css/bootstrap.min.css'
import '../css/font-awesome.min.css';
import '../css/layout.min.css';



class NavBar extends React.Component {

  state = {
    dropdownOpenLoggedOut:false,
    dropdownOpenLoggedOut2:false,
    dropdownOpenLoggedOut3:false,
    dropdownOpenLoggedIn:false,
    dropdownOpenLoggedIn2:false,
    dropdownOpenLoggedIn3:false,
  }

  handleClick  = (val) => {

    console.log(val)

    if(val === 1)
    {

      this.toggleLoggedOut();
      this.toggleLoggedOut2();
    }

    else if(val === 2)
    {
      this.toggleLoggedOut2();
      this.toggleLoggedOut();
    }
  }

  handleClick2  = () => {

    this.toggleLoggedOut3();
    this.toggleLoggedOut();


  }

  toggleLoggedOut = () => {
    this.setState({dropdownOpenLoggedOut:!this.state.dropdownOpenLoggedOut});
    this.setState({dropdownOpenLoggedIn:false});
    this.setState({dropdownOpenLoggedIn2:false});
    this.setState({dropdownOpenLoggedIn3:false});
  }

  toggleLoggedOut2 = () => {
    this.setState({dropdownOpenLoggedOut2:!this.state.dropdownOpenLoggedOut2});
    this.setState({dropdownOpenLoggedIn:false});
    this.setState({dropdownOpenLoggedIn2:false});
    this.setState({dropdownOpenLoggedIn3:false});

  }

  toggleLoggedOut3 = () => {
    this.setState({dropdownOpenLoggedOut3:!this.state.dropdownOpenLoggedOut3});
    this.setState({dropdownOpenLoggedIn:false});
    this.setState({dropdownOpenLoggedIn2:false});
    this.setState({dropdownOpenLoggedIn3:false});
  }

  toggleLoggedIn = () => {
    this.setState({dropdownOpenLoggedIn:!this.state.dropdownOpenLoggedIn});
    this.setState({dropdownOpenLoggedOut:false});
    this.setState({dropdownOpenLoggedOut2:false});
    this.setState({dropdownOpenLoggedOut3:false});

  }

  toggleLoggedIn2 = () => {
    this.setState({dropdownOpenLoggedIn2:!this.state.dropdownOpenLoggedIn2});
    this.setState({dropdownOpenLoggedOut:false});
    this.setState({dropdownOpenLoggedOut2:false});
    this.setState({dropdownOpenLoggedOut3:false});


  }

  toggleLoggedIn3 = () => {


    this.setState({dropdownOpenLoggedIn3:!this.state.dropdownOpenLoggedIn3});
    this.setState({dropdownOpenLoggedOut:false});
    this.setState({dropdownOpenLoggedOut2:false});
    this.setState({dropdownOpenLoggedOut3:false});

  }

  componentWillReceiveProps(nextProps)
  {
  //console.log(nextProps.data.userData);

    if(nextProps.data.recoverPassword)
    {
      this.toggleLoggedOut();
      this.setState({dropdownOpenLoggedOut3:nextProps.data.recoverPassword});
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
      console.log(this.props.data.userData.user.email_id)
      navItemVersion =
        <div>
          <Dropdown isOpen={this.state.dropdownOpenLoggedIn} toggle={this.toggleLoggedIn}>
            <DropdownToggle className="deck-file" data-account='#deckfile'/>
            <DropdownMenu>
              <div className="account-holder dropdown-item" id="deckfile">
                <div className="ah-head"><h6>Decks</h6><a href="javaScript:void(0);" className="ah-close" onClick={this.toggleLoggedIn}></a></div>
                <div className="ah-content">
                  <div className="ah-deck-file-panel">
                    <div className="row">
                      <div className="deck-file-panel">
                        <img src={require("../images/deck-file.png")} alt=""/>
                        <div>
                          <h3>Company Name</h3>
                          <p>/deck-name</p>
                          <span className="deck-item-span icon-track"></span>
                        </div>
                      </div>
                      <div className="deck-file-panel">
                        <img src={require("../images/deck-file.png")} alt=""/>
                        <div>
                          <h3>Company Name</h3>
                          <p>/deck-name</p>
                          <span className="deck-item-span icon-track not"></span>
                        </div>
                      </div>
                      <div className="deck-file-panel">
                        <img src={require("../images/deck-file.png")} alt=""/>
                        <div>
                          <h3>Company Name</h3>
                          <p>/deck-name</p>
                          <span className="deck-item-span icon-file"></span>
                        </div>
                      </div>
                      <div className="deck-file-panel">
                        <img src={require("../images/deck-file.png")} alt=""/>
                        <div>
                          <h3>Company Name</h3>
                          <p>/deck-name</p>
                          <span className="deck-item-span icon-track not"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </DropdownMenu>
          </Dropdown>
          <Dropdown isOpen={this.state.dropdownOpenLoggedIn2} toggle={this.toggleLoggedIn2}>
            <DropdownToggle className="deckuser" data-account="#userpanel"/>
            <DropdownMenu>
              <div className="account-holder dropdown-item" id="userpanel">
                <div className="ah-head"><h6>{this.props.data.userData.user.email_id}</h6><a href="javaScript:void(0);" className="ah-close" onClick={this.toggleLoggedIn2}></a>
                </div>
                <div className="ah-content">
                  <DeckUserContainer/>
                </div>
              </div>
            </DropdownMenu>
          </Dropdown>
          <Dropdown isOpen={this.state.dropdownOpenLoggedIn3} toggle={this.toggleLoggedIn3}>
            <DropdownToggle className="button share" data-account="#shareitem">Share</DropdownToggle>
            <DropdownMenu>
              <div class="account-holder" id="shareitem">
                <div class="ah-head"><h6>Share Deck</h6><a href="javaScript:void(0);" class="ah-close" onClick={this.toggleLoggedIn3}></a></div>
                <div class="ah-content">
                  <div class="ah-form">
                    <label>Your Unique Deck Link <a href="javaScript:void(0);" class="color-violet">Copy</a></label>
                    <input type="text" placeholder="www.dynamicdeck.io/deck-name" name=""/>
                  </div>
                  <div class="ah-form">
                    <label>Set Deck Password <a href="javaScript:void(0);">Remove</a></label>
                    <input type="Password" placeholder="* * * * * * * * * *" name=""/>
                  </div>
                  <div class="ah-button">
                    <button type="submit" class="button signup right-margin">Save</button>
                    <div class="share-switch-panel">
                      <div class="share-switch active"></div>
                        Sharing on
                    </div>
                  </div>
                </div>
              </div>
            </DropdownMenu>
          </Dropdown>
        </div>
    }

    else
    {
      navItemVersion =
        <div>
        <Dropdown isOpen={this.state.dropdownOpenLoggedOut} toggle={this.toggleLoggedOut}>
          <DropdownToggle className='button signin right-margin' data-account="#signin">
            Sign In
          </DropdownToggle>
          <DropdownMenu>
            <div className='account-holder dropdown-item' id="signin">
              <div className='ah-head'><h6>Log In</h6><a onClick={this.toggleLoggedOut} className="ah-close"></a></div>
              <div className='ah-content'>
                <LoginFormContainer/>
                <div className="ah-button">
                  <button className="button create" onClick={(val=1) => this.handleClick(val=1)} data-account="#signup">Create Account</button>
                </div>
              </div>
            </div>
          </DropdownMenu>
        </Dropdown>
        <Dropdown isOpen={this.state.dropdownOpenLoggedOut3} toggle={this.toggleLoggedOut3}>
          <DropdownToggle className='button2 right-margin2'>
          </DropdownToggle>
          <DropdownMenu>
            <div className="account-holder dropdown-item" id="forgotaccount">
              <div className="ah-head"><a onClick={this.handleClick2} className="ah-back" data-account="#signin"></a><h6>Recover Account</h6><a onClick={this.toggleLoggedOut3} className="ah-close"></a></div>
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
        <Dropdown isOpen={this.state.dropdownOpenLoggedOut2} toggle={this.toggleLoggedOut2}>
          <DropdownToggle className="button signup" data-account="#signup">
            Sign Up
          </DropdownToggle>
          <DropdownMenu>
            <div className="account-holder dropdown-item" id="signup">
              <div className="ah-head"><h6>Create Account</h6><a onClick={this.toggleLoggedOut2} className="ah-close"></a></div>
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
