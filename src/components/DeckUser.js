import React from 'react';
import '../css/bootstrap.min.css'
import '../css/font-awesome.min.css';
import '../css/layout.min.css';

let DeckUser = props => {

  const { logout } = props

  function LogOut()
  {
    logout();
  }


  return(
    <div>
      <div className="ah-deck-file-panel">
        <div className="row">
          <div className="user-item-panel"><a href="javaScript:void(0);">Switch to Deck Building</a></div>
        </div>
      </div>
      <div className="ah-deck-file-panel">
        <div className="row">
          <div className="user-item-panel"><a href="javaScript:void(0);">Profile</a></div>
          <div className="user-item-panel"><a href="javaScript:void(0);">Settings</a></div>
        </div>
      </div>
      <div className="ah-deck-file-panel">
        <div className="row">
          <div className="user-item-panel"><a href="javaScript:void(0);">Tutorials</a></div>
          <div className="user-item-panel"><a href="javaScript:void(0);">Support</a></div>
        </div>
      </div>
      <div className="ah-deck-file-panel">
        <div className="row">
          <div className="user-item-panel"><a onClick={LogOut}>Log Out</a></div>
        </div>
      </div>
    </div>
    )
  }


export default DeckUser;
