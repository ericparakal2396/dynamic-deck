import React from 'react';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import {ButtonGroup, Button , Form, FormGroup, Label, Input } from 'reactstrap';
import '../css/bootstrap.min.css'
import '../css/font-awesome.min.css';
import '../css/layout.min.css';

let CreateAccount = props => {

  const { handleSubmit } = props
  let error = {};
  let isError = false;

  const submit = ({userType='',email="",password=""}) => {

    console.log(userType);
    console.log(email);
    console.log(password);

    if(userType.trim() === '')
    {
      error.userType = 'Required';
      isError=true;
    }

    if(email.trim() === '')
    {
      error.email = 'Required';
      isError=true;
    }

    if(password.trim() === '')
    {
      error.password = 'Required';
      isError=true;
    }

    if(isError)
    {
      console.log("Error");
      console.log(error);
      throw new SubmissionError(error);
    }

    console.log(userType);
    console.log(email);
    console.log(password);
  }

  const renderTextField = ({ input,type,name,meta: { touched, error }, ...custom },) => (

    <div>
      <input
        {...input}
        {...custom}
        name={name}
        type={type}
      />
      <small>
          {error &&  <span className='validation failed'>{error}</span>}
      </small>
    </div>

  );

  const renderRadioGroup = ({ input,type,name,meta: { touched, error }, ...custom },) => (
    <div>
      <FormGroup
        {...input}
        {...custom}
        name={name}
        type={type}
        value={input.value}
        //onChange={(event, value) => {console.log(input.value);}}
      />
      <small>
        {error && !touched && <span className='validation failed'>{error}</span>}
      </small>
    </div>
  );

  return (
    <Form onSubmit={ handleSubmit(submit) }>


      <div className="ah-form">
        <label>Your Email</label>
        <Field type="text" placeholder="name@email.com" component={renderTextField} name="email"/>

      </div>
      <div className="ah-form">
        <label>Password</label>
        <Field type="Password" placeholder="* * * * * * * * * *" component={renderTextField} name="password"/>

      </div>
      <div className="ah-form">


        <Field name='userType' component={renderRadioGroup}>
          <h6>Your Primary Role</h6>
          <ul className="ah-switchs">
            <li><div className="ah-radio"><Input type="radio" name="switch" value='entrepreneur'/><span></span></div>Entrepeneur</li>
            <li><div className="ah-radio"><Input type="radio" name="switch" value='investor'/><span></span></div>Investor</li>
          </ul>
        </Field>
      </div>
      <div className="ah-button">
        <button type="submit" className="button signup right-margin">Create</button>
      </div>
    </Form>






  )
}

CreateAccount = reduxForm({
  form: 'CreateAccount'
})(CreateAccount)

export default CreateAccount;
