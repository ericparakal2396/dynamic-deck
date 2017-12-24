import React from 'react';
import { Form } from 'reactstrap';

import '../css/bootstrap.min.css'
import '../css/font-awesome.min.css';
import '../css/layout.min.css';

let RecoverAccount = props => {

  return (

        <Form>
        <div className="ah-form">
          <label>Your Email</label>
          <input type="text" placeholder="name@email.com" name=""/>
        </div>
        <div className="ah-button">
          <button type="submit" className="button signup right-margin">Recover Account</button>
        </div>
        </Form>

  )


}

export default RecoverAccount;
