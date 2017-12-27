import React, { Component } from 'react';
import '../css/bootstrap.min.css';
import '../css/font-awesome.min.css';
import '../css/layout.min.css';


export default class Decks extends Component {

  render()
  {
    return(
      <section className="deck-middle-section">
        <div className="row">
          <div className="deck-tab-container active" id="tab-deck">
            <div className="deck-sub-head">
              <div className="container">
                <div className="row">
                  <div className="flex-panel">
                    <div className="left-item">
                      <div className="deck-name" id="deckname">
                        <div className="edit-done">
                          <h3>Deck Name</h3>
                          <a href="javaScript:void(0);" className="icon-edit" data-edit="#deckname"></a>
                        </div>
                        <div className="edit-to">
                          <input type="text" value="Deck Name" name=""/>
                          <a href="javaScript:void(0);" className="icon-tic" data-edit="#deckname"></a>
                        </div>
                      </div>
                      <div className="deck-url" id="decknurl">
                        <div className="edit-done">
                          <h4>
                            <a href="#">
                              www.dynamicdeck.io/<span>deck-name</span>
                            </a>
                          </h4>
                          <a href="javaScript:void(0);" className="icon-edit" data-edit="#decknurl"></a>
                        </div>
                        <div className="edit-to">
                          <h4>
                            <a href="#">www.dynamicdeck.io/<input type="text" value="deck-name" name=""/></a>
                          </h4>
                          <a href="javaScript:void(0);" className="icon-tic" data-edit="#decknurl"></a>
                        </div>
                      </div>
                    </div>
                    <div className="right-item"><p>Create an account or Sign In to Track Decks</p></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="cover-image-panel">
              <img src={require("../images/cover-image.png")} alt=""/>
              <label className="photo-upload">
                <input type="file" name=""/>
                <span></span>
              </label>
            </div>
            <div className="deck-profle">
              <div className="container">
                <div className="row">
                  <div className="profile-photo"><img src={require("../images/logo-placeholder.png")} alt=""/>
                    <label className="photo-upload">
                      <input type="file" name=""/>
                      <span>
                      </span>
                    </label>
                  </div>
                    <div className="profile-container">
                      <div className="cp-details" id="companydetailsmob">
                        <div className="edit-done">
                          <a href="javaScript:void(0);" className="icon-edit block" data-edit="#companydetailsmob"></a>
                          <h3>Company Name</h3>
                          <p>Simple strapline that explains company purpose</p>
                        </div>
                        <div className="edit-to">
                          <a href="javaScript:void(0);" className="icon-tic" data-edit="#companydetailsmob"></a>
                          <h3><input type="text" value="Company Name" name=""/></h3>
                          <p><textarea>Simple strapline that explains company purpose</textarea></p>
                        </div>
                      </div>
                      <div className="profile-item-panel" id="profileitem">
                        <div className="edit-done">
                          <a href="javaScript:void(0);" className="icon-edit" data-edit="#profileitem"></a>
                          <div className="row">
                            <div className="col-sm-2">
                              <div className="profile-item">
                                <h5>Funds Sought</h5>
                                <h3>Value</h3>
                                <p>--% equity</p>
                              </div>
                            </div>
                            <div className="col-sm-2">
                              <div className="profile-item">
                                <h5>Valuation</h5>
                                <h3>Value</h3>
                                <p>--% Committed</p>
                              </div>
                            </div>
                            <div className="col-sm-2">
                              <div className="profile-item">
                                <h5>Funds Pledged</h5>
                                <h3>Value</h3>
                                <p>--% Committed</p>
                              </div>
                            </div>
                            <div className="col-sm-2">
                              <div className="profile-item">
                                <h5>Current MRR</h5>
                                <h3>Value</h3>
                                <p>Profitable</p>
                              </div>
                            </div>
                            <div className="col-sm-2">
                              <div className="profile-item">
                                <h5>Prior Funding</h5>
                                <p className="top-margin">Subtitle</p>
                                <p>Subtitle</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="edit-to">
                          <a href="javaScript:void(0);" className="icon-tic" data-edit="#profileitem"></a>
                          <div className="row">
                            <div className="col-sm-2">
                              <div className="profile-item">
                                <h5>Funds Sought</h5>
                                <h3><input type="text" value="Value" name=""/></h3>
                                <p><input type="text" value="--% equity"/></p>
                              </div>
                            </div>
                            <div className="col-sm-2">
                              <div className="profile-item">
                                <h5>Valuation</h5>
                                <h3><input type="text" value="Value" name=""/></h3>
                                <p><input type="text" value="--% Committed"/></p>
                              </div>
                            </div>
                            <div className="col-sm-2">
                              <div className="profile-item">
                                <h5>Funds Pledged</h5>
                                <h3><input type="text" value="Value" name=""/></h3>
                                <p><input type="text" value="--% Committed"/></p>
                              </div>
                            </div>
                            <div className="col-sm-2">
                              <div className="profile-item">
                                <h5>Current MRR</h5>
                                <h3><input type="text" value="Value" name=""/></h3>
                                <p><input type="text" value="Profitable"/></p>
                              </div>
                            </div>
                            <div className="col-sm-2">
                              <div className="profile-item">
                                <h5>Prior Funding</h5>
                                <p className="top-margin"><input type="text" value="Subtitle"/></p>
                                <p><input type="text" value="Subtitle"/></p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
					            <div className="investor-metrics none-bg">
						            <ul className="invest-item">
                      		<li className="icon-track"><span>###</span></li>
                      		<li className="icon-speeker"><span>###</span></li>
                      	</ul>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
