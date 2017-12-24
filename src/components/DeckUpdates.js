import React, { Component } from 'react';
import '../css/bootstrap.min.css'
import '../css/font-awesome.min.css';
import '../css/layout.min.css';

export default class DeckUpdates extends Component {

  render()
  {
    return(
      <section className="deck-middle-section">
        <div className="row">
          <div className="deck-tab-container active" id="tab-updates">
            <div className="deck-sub-head">
              <div className="container">
                <div className="row">
                  <div className="flex-panel">
                    <div className="left-item">
                      <div className="deck-name"><h3>Deck Updates</h3></div>
                    </div>
                    <div className="right-item"><p>Create an account or Sign In to Track Decks</p></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="cover-image-panel"><img src={require('../images/cover-image.png')} alt=""/></div>
            <div className="deck-profle">
              <div className="container">
                <div className="row">
                  <div className="profile-photo"><img src={require("../images/logo-placeholder.png")} alt=""/></div>
                  <div className="profile-container">
                    <div className="cp-details">
                      <h3>Company Name</h3>
                      <p>Simple strapline that explains company purpose</p>
                    </div>
                    <div className="profile-item-panel">
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
                    <div className="investor-metrics">Investor Metrics</div>
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
