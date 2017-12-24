import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import Decks from './Decks';
import Insights from './Insights';
import Attachments from './Attachments';
import DeckUpdates from './DeckUpdates';
import RecoverAccount from './RecoverAccount';


export default class Main extends Component {

  render() {
    return(
      <main>
      <Switch>
        <Route path='/Decks' component={Decks}/>
        <Route path='/Insights' component={Insights}/>
        <Route path='/Attachments' component={Attachments}/>
        <Route path='/DeckUpdates' component={DeckUpdates}/>
      </Switch>
      </main>
    );
  }
};
