import React, { Component } from 'react';

export default class Insights extends Component {

  render()
  {
    return(
      <section className="deck-middle-section">
        <div className="row">
          <div class="deck-tab-container active" id="tab-insights">
            <div class="deck-sub-head">
              <div class="container">
                <div class="row">
                  <div class="flex-panel">
                    <div class="left-item">
                      <div class="deck-name"><h3>Insights</h3></div>
                    </div>
                    <div class="right-item">
                      <div class="date-panel">
                        <input type="text" data-range="true" data-multiple-dates-separator=" - " data-language="en" class="deck-datepicker" placeholder="05/04/17 – 17/04/17" />
                      </div>
                      <div class="date-sort">
                        <ul>
                          <li class="active">Day</li>
                          <li>Week</li>
                          <li>Month</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="cover-image-panel">
              <img src={require("../images/cover-image.png")} alt=""/>
            </div>
            <div class="deck-profle">
              <div class="container">
                <div class="row">
                  <div class="profile-photo">
                    <img src={require("../images/logo-placeholder.png")} alt=""/>
                  </div>
                  <div class="profile-container">
                    <div class="cp-details">
                      <h3>Company Name</h3>
                      <p>Simple strapline that explains company purpose</p>
                    </div>
                    <div class="profile-item-panel">
                      <div class="row">
                        <div class="col-sm-2">
                          <div class="profile-item">
                            <h5>Funds Sought</h5>
                            <h3>Value</h3>
                            <p>--% equity</p>
                          </div>
                        </div>
                        <div class="col-sm-2">
                          <div class="profile-item">
                            <h5>Valuation</h5>
                            <h3>Value</h3>
                            <p>--% Committed</p>
                          </div>
                        </div>
                        <div class="col-sm-2">
                          <div class="profile-item">
                            <h5>Funds Pledged</h5>
                            <h3>Value</h3>
                            <p>--% Committed</p>
                          </div>
                        </div>
                        <div class="col-sm-2">
                          <div class="profile-item">
                            <h5>Current MRR</h5>
                            <h3>Value</h3>
                            <p>Profitable</p>
                          </div>
                        </div>
                        <div class="col-sm-2">
                          <div class="profile-item">
                            <h5>Prior Funding</h5>
                            <p class="top-margin">Subtitle</p>
                            <p>Subtitle</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="investor-metrics none-bg">
                      <ul class="invest-item">
                        <li class="icon-track"><span>###</span></li>
                        <li class="icon-speeker"><span>###</span></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="attachment-container">
              <div class="container">
                <div class="row">
                  <div class="insight-details">
                    <div class="insight">
                      <div class="profile-item">
                        <h5>Investors Tracking</h5>
                        <h3>Value</h3>
                        <p>(DD Avg: -- )</p>
                      </div>
                    </div>
                    <div class="insight">
                      <div class="profile-item">
                        <h5>Deck Views</h5>
                        <h3>Value</h3>
                        <p>(DD Avg: -- )</p>
                      </div>
                    </div>
                    <div class="insight">
                      <div class="profile-item">
                        <h5>Summaries Printed</h5>
                        <h3>Value</h3>
                        <p>(DD Avg: -- )</p>
                      </div>
                    </div>
                  </div>
                  <div class="attach-panel graph-container">
                    <div class="row">
                      <div class="graph-panel"><img src={require("../images/graph.jpg")} alt=""/></div>
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
