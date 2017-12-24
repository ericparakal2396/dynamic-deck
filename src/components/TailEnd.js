import React, { Component } from 'react';

export default class TailEnd extends Component {

  render()
  {
    return(
      <section className="deck-bottom-section">
        <div className="container">
          <div className="row">
            <div className="company-profile">
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
                  <div className="col-sm-2">
                    <div className="investor-metrics">Investor Metrics</div>
                  </div>
                </div>
              </div>
              <div className="cp-links">
                <ul>
                  <li className="icon-nav">City, Country</li>
                  <li className="icon-bag">Sector</li>
                  <li className="icon-globe">Website</li>
                  <li className="icon-calender">Date Est.</li>
                </ul>
              </div>
              <div className="cp-links">
                <ul>
                  <li className="icon-fb">Social link</li>
                  <li className="icon-tw">Social link</li>
                  <li className="icon-ig">Social link</li>
                </ul>
              </div>
              <div className="investor-metrics for-tab">Investor Metrics</div>
            </div>
            <div className="company-detail-container">
              <div className="company-panel">
                <h3>Title</h3>
                  <div className="cd-panel">
                    <h5>Subtitle</h5>
                    <p>Content of the what, how and who areas goes here so that it fills the available space nicely.</p>
                  </div>
                  <div className="cd-panel">
                    <h5>Subtitle</h5>
                    <p>Content of the what, how and who areas goes here so that it fills the available space nicely.</p>
                  </div>
                  <div className="cd-panel">
                    <h5>Subtitle</h5>
                    <ul>
                      <li>Bullet point goes here, with space for up to two lines of text</li>
                      <li>Bullet point goes here, with space for up to two lines of text</li>
                      <li>Bullet point goes here, with space for up to two lines of text</li>
                    </ul>
                  </div>
              </div>
              <div className="company-panel">
                <h3>Title</h3>
                <div className="cd-panel">
                  <h5>Subtitle</h5>
                  <p>Content of the what, how and who areas goes here so that it fills the available space nicely.</p>
                </div>
                <div className="cd-panel">
                  <h5>Subtitle</h5>
                  <p>Content of the what, how and who areas goes here so that it fills the available space nicely.</p>
                </div>
                <div className="cd-panel">
                  <h5>Subtitle</h5>
                  <ul>
                    <li>Bullet point goes here, with space for up to two lines of text</li>
                    <li>Bullet point goes here, with space for up to two lines of text</li>
                    <li>Bullet point goes here, with space for up to two lines of text</li>
                  </ul>
                </div>
              </div>
              <div className="company-panel">
                <h3>Title</h3>
                <div className="cd-panel">
                  <h5>Subtitle</h5>
                  <div className="deck-item">
                    <img src={require("../images/deck.png")} alt=""/>
                    <div>
                      <h6>Name</h6>
                      <p>Role or title</p>
                      <span>Prior role or experience</span>
                    </div>
                  </div>
                  <div className="deck-item">
                    <img src={require("../images/deck.png")} alt=""/>
                    <div>
                      <h6>Name</h6>
                      <p>Role or title</p>
                      <span>Prior role or experience</span>
                    </div>
                  </div>
                  <div className="deck-item">
                    <img src={require("../images/deck.png")} alt=""/>
                      <div>
                        <h6>Name</h6>
                        <p>Role or title</p>
                        <span>Prior role or experience</span>
                      </div>
                  </div>
                </div>
                <div className="cd-panel">
                  <h5>Subtitle</h5>
                  <div className="deck-item">
                    <img src={require("../images/deck.png")} alt=""/>
                    <div>
                      <h6>Name</h6>
                      <p>Role or title</p>
                      <span>Prior role or experience</span>
                    </div>
                  </div>
                  <div className="deck-item">
                    <img src={require("../images/deck.png")} alt=""/>
                    <div>
                      <h6>Name</h6>
                      <p>Role or title</p>
                      <span>Prior role or experience</span>
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
