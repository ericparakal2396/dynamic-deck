import React, { Component } from 'react';

export default class TailEnd extends Component {

  render()
  {
    return(
      <section className="deck-bottom-section">
          <div className="container">
            <div className="row">
              <div className="company-profile">
                <div className="cp-details" id="companydetails">
                  <div className="edit-done">
                    <a href="javaScript:void(0);" className="icon-edit" data-edit="#companydetails"></a>
                    <h3>Company Name</h3>
                    <p>Simple strapline that explains company purpose</p>
                  </div>
                  <div className="edit-to">
                    <a href="javaScript:void(0);" className="icon-tic" data-edit="#companydetails"></a>
                    <h3><input type="text" value="Company Name" name=""/></h3>
                    <p><textarea>Simple strapline that explains company purpose</textarea></p>
                  </div>
                </div>
                <div className="profile-item-panel" id="profileitemmobile">
                  <div className="edit-done">
                    <a href="javaScript:void(0);" className="icon-edit block" data-edit="#profileitemmobile"></a>
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
                        <div className="investor-metrics none-bg">
                          <ul className="invest-item">
                            <li className="icon-track"><span>###</span></li>
                            <li className="icon-speeker"><span>###</span></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="edit-to">
                    <a href="javaScript:void(0);" className="icon-tic" data-edit="#profileitemmobile"></a>
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
                      <div className="col-sm-2">
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
                <div className="cp-links" id="cplink">
                  <div className="edit-done">
                    <a href="javaScript:void(0);" className="icon-edit" data-edit="#cplink"></a>
                    <ul>
                      <li className="icon-cno">CN: 123456789</li>
                      <li className="icon-nav">City, Country</li>
                      <li className="icon-bag">Sector</li>
                      <li className="icon-globe">Website</li>
                      <li className="icon-calender">Date Est.</li>
                    </ul>
                  </div>
                  <div className="edit-to">
                    <a href="javaScript:void(0);" className="icon-tic" data-edit="#cplink"></a>
                    <ul>
                      <li className="icon-nav"><input type="text" value="City, Country"/></li>
                      <li className="icon-nav"><input type="text" value="City, Country"/></li>
                      <li className="icon-bag"><input type="text" value="Sector"/></li>
                      <li className="icon-globe"><input type="text" value="Website"/></li>
                      <li className="icon-calender"><input type="text" value="Date Est."/></li>
                    </ul>
                  </div>
                </div>
                <div className="cp-links" id="cplinks">
                  <div className="edit-done">
                    <a href="javaScript:void(0);" className="icon-edit" data-edit="#cplinks"></a>
                    <ul>
                      <li className="icon-fb">Social link</li>
                      <li className="icon-tw">Social link</li>
                      <li className="icon-ig">Social link</li>
                    </ul>
                  </div>
                  <div className="edit-to">
                    <a href="javaScript:void(0);" className="icon-tic" data-edit="#cplinks"></a>
                    <ul>
                      <li className="icon-fb"><input type="text" value="Social link"/></li>
                      <li className="icon-tw"><input type="text" value="Social link"/></li>
                      <li className="icon-ig"><input type="text" value="Social link"/></li>
                    </ul>
                  </div>
                </div>
                <div className="investor-metrics none-bg for-tab">
                  <ul className="invest-item">
                    <li className="icon-track"><span>###</span></li>
                    <li className="icon-speeker"><span>###</span></li>
                  </ul>
                </div>
              </div>
              <div className="company-detail-container">
                <div className="company-panel" id="companydet">
                  <div className="edit-done">
                    <a href="javaScript:void(0);" className="icon-edit" data-edit="#companydet"></a>
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
                  <div className="edit-to">
                    <a href="javaScript:void(0);" className="icon-tic" data-edit="#companydet"></a>
                    <h3><input type="text" value="Title"/></h3>
                    <div className="cd-panel">
                      <h5><input type="text" value="Subtitle"/></h5>
                      <p><textarea>Content of the what, how and who areas goes here so that it fills the available space nicely.</textarea></p>
                    </div>
                    <div className="cd-panel">
                      <h5><input type="text" value="Subtitle"/></h5>
                      <p><textarea>Content of the what, how and who areas goes here so that it fills the available space nicely.</textarea></p>
                    </div>
                    <div className="cd-panel">
                      <h5><input type="text" value="Subtitle"/></h5>
                      <ul>
                        <li><textarea>Bullet point goes here, with space for up to two lines of text</textarea></li>
                        <li><textarea>Bullet point goes here, with space for up to two lines of text</textarea></li>
                        <li><textarea>Bullet point goes here, with space for up to two lines of text</textarea></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="company-panel" id="companydets">
                  <div className="edit-done">
                    <a href="javaScript:void(0);" className="icon-edit" data-edit="#companydets"></a>
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
                  <div className="edit-to">
                    <a href="javaScript:void(0);" className="icon-tic" data-edit="#companydets"></a>
                    <h3><input type="text" value="Title"/></h3>
                    <div className="cd-panel">
                      <h5><input type="text" value="Subtitle"/></h5>
                      <p><textarea>Content of the what, how and who areas goes here so that it fills the available space nicely.</textarea></p>
                    </div>
                    <div className="cd-panel">
                      <h5><input type="text" value="Subtitle"/></h5>
                      <p><textarea>Content of the what, how and who areas goes here so that it fills the available space nicely.</textarea></p>
                    </div>
                    <div className="cd-panel">
                      <h5><input type="text" value="Subtitle"/></h5>
                      <ul>
                        <li><textarea>Bullet point goes here, with space for up to two lines of text</textarea></li>
                        <li><textarea>Bullet point goes here, with space for up to two lines of text</textarea></li>
                        <li><textarea>Bullet point goes here, with space for up to two lines of text</textarea></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="company-panel" id="decklist">
                  <div className="edit-done">
                    <a href="javaScript:void(0);" className="icon-edit" data-edit="#decklist"></a>
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
                  <div className="edit-to">
                    <a href="javaScript:void(0);" className="icon-tic" data-edit="#decklist"></a>
                    <h3><input type="text" value="Title"/></h3>
                    <div className="cd-panel">
                      <h5><input type="text" value="Subtitle"/></h5>
                      <div className="deck-item">
                        <img src={require("../images/deck.png")} alt=""/>
                        <label className="deck-upload"><input type="file" name=""/><span></span></label>
                        <div>
                          <h6><input type="text" value="Name"/></h6>
                          <p><input type="text" value="Role or title"/></p>
                          <span><input type="text" value="Prior role or experience"/></span>
                        </div>
                      </div>
                      <div className="deck-item">
                        <img src={require("../images/deck.png")} alt=""/>
                        <label className="deck-upload"><input type="file" name=""/><span></span></label>
                        <div>
                          <h6><input type="text" value="Name"/></h6>
                          <p><input type="text" value="Role or title"/></p>
                          <span><input type="text" value="Prior role or experience"/></span>
                        </div>
                      </div>
                      <div className="deck-item">
                        <img src={require("../images/deck.png")} alt=""/>
                        <label className="deck-upload"><input type="file" name=""/><span></span></label>
                        <div>
                          <h6><input type="text" value="Name"/></h6>
                          <p><input type="text" value="Role or title"/></p>
                          <span><input type="text" value="Prior role or experience"/></span>
                        </div>
                      </div>
                    </div>
                    <div className="cd-panel">
                      <h5><input type="text" value="Subtitle"/></h5>
                      <div className="deck-item">
                        <img src={require("../images/deck.png")} alt=""/>
                        <label className="deck-upload"><input type="file" name=""/><span></span></label>
                        <div>
                          <h6><input type="text" value="Name"/></h6>
                          <p><input type="text" value="Role or title"/></p>
                          <span><input type="text" value="Prior role or experience"/></span>
                        </div>
                      </div>
                      <div className="deck-item">
                        <img src={require("../images/deck.png")} alt=""/>
                        <label className="deck-upload"><input type="file" name=""/><span></span></label>
                        <div>
                          <h6><input type="text" value="Name"/></h6>
                          <p><input type="text" value="Role or title"/></p>
                          <span><input type="text" value="Prior role or experience"/></span>
                        </div>
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
