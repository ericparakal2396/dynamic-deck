import React from 'react';
import { reduxForm, Field, SubmissionError } from 'redux-form';
import { Form } from 'reactstrap';
import '../css/bootstrap.min.css'
import '../css/font-awesome.min.css';
import '../css/layout.min.css';

let LoginForm = props => {

  const { handleSubmit,recoveremail,login,listdeck,data } = props
  let error = {};
  let isError = false;

  function recoverEmail() {
    console.log('Recover');
    recoveremail()
  }


  const submit = ({email="",password=""}) => {

    //console.log(email);
    //console.log(password);

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

    else {
      console.log("Valid Submission");
      var values={email:email,password:password};
      login(values);
      //console.log(data.userData);

    }

  }





  let error2 = false;

  if(data.loading === false)
  {
    if(data.login === 'rejected')
    {
      //console.log('False');
      //console.log(error2);
      error2=data.userData.message;
      data.login=null;
    }

    else if(data.login === 'accepted')
    {
      //console.log('True');
      //console.log(data.userData);
    }
  }

  const renderTextField = ({ input,type,name,meta: { touched, error,}, ...custom },) => (

    <div>
      <input
        {...input}
        {...custom}
        name={name}
        type={type}

      />
      <small >
          {error && <span className='validation failed'>{error}</span>}
          {error2  && <span className='validation failed'>{error2}</span>}

      </small>



    </div>

  );

  return (
    <Form onSubmit={ handleSubmit(submit) }>
    <div className='ah-form'>
      <label>Your Email</label>
      <Field type="text" placeholder="name@email.com" component={renderTextField} name="email"/>
      <a href="javaScript:void(0);" className="icon-info">Forgot your email?</a>
    </div>
    <div className="ah-form">
      <label>Password</label>
      <Field type="Password" placeholder="* * * * * * * * * *" component={renderTextField} name="password"/>
      <a onClick={recoverEmail} className="icon-info" data-account="#forgotaccount">Forgot your password?</a>
    </div>
    <div className="ah-button">
      <button type="submit" className="button signup right-margin">Log In</button>
    </div>
    </Form>
  )


}

LoginForm = reduxForm({
  form: 'Login'
})(LoginForm)

export default LoginForm;
