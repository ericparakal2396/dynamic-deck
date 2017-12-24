import React, { Component } from 'react';
import '../css/bootstrap.min.css'
import '../css/font-awesome.min.css';
import '../css/layout.min.css';

export default class Attachments extends Component {

  render()
  {
    return(
      <section className="deck-middle-section">
        <div className="row">
          <div className="deck-tab-container active" id="tab-attach">
            <div className="deck-sub-head">
              <div className="container">
                <div className="row">
                  <div className="flex-panel">
                    <div className="left-item">
                      <div className="deck-name"><h3>Attachments</h3></div>
                    </div>
                    <div className="right-item"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="cover-image-panel"><img src={require("../images/cover-image.png")} alt=""/></div>
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
            <div className="attachment-container">
              <div className="container">
                <div className="row">
                  <div className="attach-panel">
                    <div className="row">
                      <div className="col-sm-4">
                        <div className="attachment-panel stage_1">
                          <div className="attachment stage-1">
                            <button className="button attach">+ Add Attachment</button>
                          </div>
                          <div className="attachment stage-2">
                            <div className="attach-image">
                              <label className="file-upload"><input type="file" name=""/><span>Choose File</span></label>
                              <p>MS Office, iWorks or PDF</p>
                            </div>
                            <div className="attach-content">
                              <input type="text" value="Attachment Title" name="" defaultValue=""/>
                              <textarea>Short description of the attachment goes here</textarea>
                              <div className="attach-acttion">
                                <a href="javaScript:void(0)" className="save-attach"></a>
                              </div>
                            </div>
                          </div>
                          <div className="attachment stage-3">
                            <div className="attach-image"><img src={require("../images/attachment.png")}/></div>
                            <div className="attach-content">
                              <h3>Attachment Title</h3>
                              <p>Short description of the attachment goes here</p>
                              <ul>
                                <li>File size</li>
                                <li>File type</li>
                                <li>Date</li>
                              </ul>
                              <div className="attach-acttion">
                                <a href="javaScript:void(0);" className="delete-attach"></a>
                                <a href="javaScript:void(0);" className="edit-attach"></a>
                                <a href="javaScript:void(0);" className="download-attach"></a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="attachment-panel stage_2">
                          <div className="attachment stage-1">
                            <button className="button attach">+ Add Attachment</button>
                          </div>
                          <div className="attachment stage-2">
                            <div className="attach-image">
                              <label className="file-upload"><input type="file" name=""/><span>Choose File</span></label>
                              <p>MS Office, iWorks or PDF</p>
                            </div>
                            <div className="attach-content">
                              <input type="text" value="Attachment Title" name=""/>
                              <textarea>Short description of the attachment goes here</textarea>
                              <div className="attach-acttion">
                                <a href="javaScript:void(0)" className="save-attach"></a>
                              </div>
                            </div>
                          </div>
                          <div className="attachment stage-3">
                            <div className="attach-image"><img src={require("../images/attachment.png")}/></div>
                            <div className="attach-content">
                              <h3>Attachment Title</h3>
                              <p>Short description of the attachment goes here</p>
                              <ul>
                                <li>File size</li>
                                <li>File type</li>
                                <li>Date</li>
                              </ul>
                              <div className="attach-acttion">
                                <a href="javaScript:void(0);" className="delete-attach"></a>
                                <a href="javaScript:void(0);" className="edit-attach"></a>
                                <a href="javaScript:void(0);" className="download-attach"></a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="attachment-panel stage_3">
                          <div className="attachment stage-1">
                            <button className="button attach">+ Add Attachment</button>
                          </div>
                          <div className="attachment stage-2">
                            <div className="attach-image">
                              <label className="file-upload"><input type="file" name=""/><span>Choose File</span></label>
                              <p>MS Office, iWorks or PDF</p>
                            </div>
                            <div className="attach-content">
                              <input type="text" value="Attachment Title" name=""/>
                              <textarea>Short description of the attachment goes here</textarea>
                              <div className="attach-acttion">
                                <a href="javaScript:void(0)" className="save-attach"></a>
                              </div>
                            </div>
                          </div>
                          <div className="attachment stage-3">
                            <div className="attach-image"><img src={require("../images/attachment.png")}/></div>
                            <div className="attach-content">
                              <h3>Attachment Title</h3>
                              <p>Short description of the attachment goes here</p>
                              <ul>
                                <li>File size</li>
                                <li>File type</li>
                                <li>Date</li>
                              </ul>
                              <div className="attach-acttion">
                                <a href="javaScript:void(0);" className="delete-attach"></a>
                                <a href="javaScript:void(0);" className="edit-attach"></a>
                                <a href="javaScript:void(0);" className="download-attach"></a>
                              </div>
                            </div>
                          </div>
                        </div>
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
