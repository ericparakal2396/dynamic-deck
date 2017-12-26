import React, { Component } from 'react';

export default class TailEnd extends Component {

  render()
  {
    return(
      <section class="deck-bottom-section">
          <div class="container">
            <div class="row">
              <div class="company-profile">
                <div class="cp-details" id="companydetails">
                  <div class="edit-done">
                    <a href="javaScript:void(0);" class="icon-edit" data-edit="#companydetails"></a>
                    <h3>Company Name</h3>
                    <p>Simple strapline that explains company purpose</p>
                  </div>
                  <div class="edit-to">
                    <a href="javaScript:void(0);" class="icon-tic" data-edit="#companydetails"></a>
                    <h3><input type="text" value="Company Name" name=""/></h3>
                    <p><textarea>Simple strapline that explains company purpose</textarea></p>
                  </div>
                </div>
                <div class="profile-item-panel" id="profileitemmobile">
                  <div class="edit-done">
                    <a href="javaScript:void(0);" class="icon-edit block" data-edit="#profileitemmobile"></a>
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
                      <div class="col-sm-2">
                        <div class="investor-metrics none-bg">
                          <ul class="invest-item">
                            <li class="icon-track"><span>###</span></li>
                            <li class="icon-speeker"><span>###</span></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="edit-to">
                    <a href="javaScript:void(0);" class="icon-tic" data-edit="#profileitemmobile"></a>
                    <div class="row">
                      <div class="col-sm-2">
                        <div class="profile-item">
                          <h5>Funds Sought</h5>
                          <h3><input type="text" value="Value" name=""/></h3>
                          <p><input type="text" value="--% equity"/></p>
                        </div>
                      </div>
                      <div class="col-sm-2">
                        <div class="profile-item">
                          <h5>Valuation</h5>
                          <h3><input type="text" value="Value" name=""/></h3>
                          <p><input type="text" value="--% Committed"/></p>
                        </div>
                      </div>
                      <div class="col-sm-2">
                        <div class="profile-item">
                          <h5>Funds Pledged</h5>
                          <h3><input type="text" value="Value" name=""/></h3>
                          <p><input type="text" value="--% Committed"/></p>
                        </div>
                      </div>
                      <div class="col-sm-2">
                        <div class="profile-item">
                          <h5>Current MRR</h5>
                          <h3><input type="text" value="Value" name=""/></h3>
                          <p><input type="text" value="Profitable"/></p>
                        </div>
                      </div>
                      <div class="col-sm-2">
                        <div class="profile-item">
                          <h5>Prior Funding</h5>
                          <p class="top-margin"><input type="text" value="Subtitle"/></p>
                          <p><input type="text" value="Subtitle"/></p>
                        </div>
                      </div>
                      <div class="col-sm-2">
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
                <div class="cp-links" id="cplink">
                  <div class="edit-done">
                    <a href="javaScript:void(0);" class="icon-edit" data-edit="#cplink"></a>
                    <ul>
                      <li class="icon-cno">CN: 123456789</li>
                      <li class="icon-nav">City, Country</li>
                      <li class="icon-bag">Sector</li>
                      <li class="icon-globe">Website</li>
                      <li class="icon-calender">Date Est.</li>
                    </ul>
                  </div>
                  <div class="edit-to">
                    <a href="javaScript:void(0);" class="icon-tic" data-edit="#cplink"></a>
                    <ul>
                      <li class="icon-nav"><input type="text" value="City, Country"/></li>
                      <li class="icon-nav"><input type="text" value="City, Country"/></li>
                      <li class="icon-bag"><input type="text" value="Sector"/></li>
                      <li class="icon-globe"><input type="text" value="Website"/></li>
                      <li class="icon-calender"><input type="text" value="Date Est."/></li>
                    </ul>
                  </div>
                </div>
                <div class="cp-links" id="cplinks">
                  <div class="edit-done">
                    <a href="javaScript:void(0);" class="icon-edit" data-edit="#cplinks"></a>
                    <ul>
                      <li class="icon-fb">Social link</li>
                      <li class="icon-tw">Social link</li>
                      <li class="icon-ig">Social link</li>
                    </ul>
                  </div>
                  <div class="edit-to">
                    <a href="javaScript:void(0);" class="icon-tic" data-edit="#cplinks"></a>
                    <ul>
                      <li class="icon-fb"><input type="text" value="Social link"/></li>
                      <li class="icon-tw"><input type="text" value="Social link"/></li>
                      <li class="icon-ig"><input type="text" value="Social link"/></li>
                    </ul>
                  </div>
                </div>
                <div class="investor-metrics none-bg for-tab">
                  <ul class="invest-item">
                    <li class="icon-track"><span>###</span></li>
                    <li class="icon-speeker"><span>###</span></li>
                  </ul>
                </div>
              </div>
              <div class="company-detail-container">
                <div class="company-panel" id="companydet">
                  <div class="edit-done">
                    <a href="javaScript:void(0);" class="icon-edit" data-edit="#companydet"></a>
                    <h3>Title</h3>
                    <div class="cd-panel">
                      <h5>Subtitle</h5>
                      <p>Content of the what, how and who areas goes here so that it fills the available space nicely.</p>
                    </div>
                    <div class="cd-panel">
                      <h5>Subtitle</h5>
                      <p>Content of the what, how and who areas goes here so that it fills the available space nicely.</p>
                    </div>
                    <div class="cd-panel">
                      <h5>Subtitle</h5>
                      <ul>
                        <li>Bullet point goes here, with space for up to two lines of text</li>
                        <li>Bullet point goes here, with space for up to two lines of text</li>
                        <li>Bullet point goes here, with space for up to two lines of text</li>
                      </ul>
                    </div>
                  </div>
                  <div class="edit-to">
                    <a href="javaScript:void(0);" class="icon-tic" data-edit="#companydet"></a>
                    <h3><input type="text" value="Title"/></h3>
                    <div class="cd-panel">
                      <h5><input type="text" value="Subtitle"/></h5>
                      <p><textarea>Content of the what, how and who areas goes here so that it fills the available space nicely.</textarea></p>
                    </div>
                    <div class="cd-panel">
                      <h5><input type="text" value="Subtitle"/></h5>
                      <p><textarea>Content of the what, how and who areas goes here so that it fills the available space nicely.</textarea></p>
                    </div>
                    <div class="cd-panel">
                      <h5><input type="text" value="Subtitle"/></h5>
                      <ul>
                        <li><textarea>Bullet point goes here, with space for up to two lines of text</textarea></li>
                        <li><textarea>Bullet point goes here, with space for up to two lines of text</textarea></li>
                        <li><textarea>Bullet point goes here, with space for up to two lines of text</textarea></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="company-panel" id="companydets">
                  <div class="edit-done">
                    <a href="javaScript:void(0);" class="icon-edit" data-edit="#companydets"></a>
                    <h3>Title</h3>
                    <div class="cd-panel">
                      <h5>Subtitle</h5>
                      <p>Content of the what, how and who areas goes here so that it fills the available space nicely.</p>
                    </div>
                    <div class="cd-panel">
                      <h5>Subtitle</h5>
                      <p>Content of the what, how and who areas goes here so that it fills the available space nicely.</p>
                    </div>
                    <div class="cd-panel">
                      <h5>Subtitle</h5>
                      <ul>
                        <li>Bullet point goes here, with space for up to two lines of text</li>
                        <li>Bullet point goes here, with space for up to two lines of text</li>
                        <li>Bullet point goes here, with space for up to two lines of text</li>
                      </ul>
                    </div>
                  </div>
                  <div class="edit-to">
                    <a href="javaScript:void(0);" class="icon-tic" data-edit="#companydets"></a>
                    <h3><input type="text" value="Title"/></h3>
                    <div class="cd-panel">
                      <h5><input type="text" value="Subtitle"/></h5>
                      <p><textarea>Content of the what, how and who areas goes here so that it fills the available space nicely.</textarea></p>
                    </div>
                    <div class="cd-panel">
                      <h5><input type="text" value="Subtitle"/></h5>
                      <p><textarea>Content of the what, how and who areas goes here so that it fills the available space nicely.</textarea></p>
                    </div>
                    <div class="cd-panel">
                      <h5><input type="text" value="Subtitle"/></h5>
                      <ul>
                        <li><textarea>Bullet point goes here, with space for up to two lines of text</textarea></li>
                        <li><textarea>Bullet point goes here, with space for up to two lines of text</textarea></li>
                        <li><textarea>Bullet point goes here, with space for up to two lines of text</textarea></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="company-panel" id="decklist">
                  <div class="edit-done">
                    <a href="javaScript:void(0);" class="icon-edit" data-edit="#decklist"></a>
                    <h3>Title</h3>
                    <div class="cd-panel">
                      <h5>Subtitle</h5>
                      <div class="deck-item">
                        <img src={require("../images/deck.png")} alt=""/>
                        <div>
                          <h6>Name</h6>
                          <p>Role or title</p>
                          <span>Prior role or experience</span>
                        </div>
                      </div>
                      <div class="deck-item">
                        <img src={require("../images/deck.png")} alt=""/>
                        <div>
                          <h6>Name</h6>
                          <p>Role or title</p>
                          <span>Prior role or experience</span>
                        </div>
                      </div>
                      <div class="deck-item">
                        <img src={require("../images/deck.png")} alt=""/>
                        <div>
                          <h6>Name</h6>
                          <p>Role or title</p>
                          <span>Prior role or experience</span>
                        </div>
                      </div>
                    </div>
                    <div class="cd-panel">
                      <h5>Subtitle</h5>
                      <div class="deck-item">
                        <img src={require("../images/deck.png")} alt=""/>
                        <div>
                          <h6>Name</h6>
                          <p>Role or title</p>
                          <span>Prior role or experience</span>
                        </div>
                      </div>
                      <div class="deck-item">
                        <img src={require("../images/deck.png")} alt=""/>
                        <div>
                          <h6>Name</h6>
                          <p>Role or title</p>
                          <span>Prior role or experience</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="edit-to">
                    <a href="javaScript:void(0);" class="icon-tic" data-edit="#decklist"></a>
                    <h3><input type="text" value="Title"/></h3>
                    <div class="cd-panel">
                      <h5><input type="text" value="Subtitle"/></h5>
                      <div class="deck-item">
                        <img src={require("../images/deck.png")} alt=""/>
                        <label class="deck-upload"><input type="file" name=""/><span></span></label>
                        <div>
                          <h6><input type="text" value="Name"/></h6>
                          <p><input type="text" value="Role or title"/></p>
                          <span><input type="text" value="Prior role or experience"/></span>
                        </div>
                      </div>
                      <div class="deck-item">
                        <img src={require("../images/deck.png")} alt=""/>
                        <label class="deck-upload"><input type="file" name=""/><span></span></label>
                        <div>
                          <h6><input type="text" value="Name"/></h6>
                          <p><input type="text" value="Role or title"/></p>
                          <span><input type="text" value="Prior role or experience"/></span>
                        </div>
                      </div>
                      <div class="deck-item">
                        <img src={require("../images/deck.png")} alt=""/>
                        <label class="deck-upload"><input type="file" name=""/><span></span></label>
                        <div>
                          <h6><input type="text" value="Name"/></h6>
                          <p><input type="text" value="Role or title"/></p>
                          <span><input type="text" value="Prior role or experience"/></span>
                        </div>
                      </div>
                    </div>
                    <div class="cd-panel">
                      <h5><input type="text" value="Subtitle"/></h5>
                      <div class="deck-item">
                        <img src={require("../images/deck.png")} alt=""/>
                        <label class="deck-upload"><input type="file" name=""/><span></span></label>
                        <div>
                          <h6><input type="text" value="Name"/></h6>
                          <p><input type="text" value="Role or title"/></p>
                          <span><input type="text" value="Prior role or experience"/></span>
                        </div>
                      </div>
                      <div class="deck-item">
                        <img src={require("../images/deck.png")} alt=""/>
                        <label class="deck-upload"><input type="file" name=""/><span></span></label>
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
