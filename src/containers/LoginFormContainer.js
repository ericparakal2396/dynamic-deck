import { connect } from 'react-redux';
import LoginForm from '../components/LoginForm';
import {recoveremail} from '../actions/user';
import {login} from '../actions/user';
import {listdeck} from '../actions/user';

const mapStateToProps = (state) => ({
  data: state.LoginFormReducer,
})

const mapDispatchToProps = (dispatch) => {
  return {
    recoveremail: () => {
      dispatch(recoveremail());
    },
    login: (user) => {
      dispatch(login(user))
    },
    listdeck: () => {
      dispatch(listdeck())
    }
  }
}


const LoginFormContainer = connect (
  mapStateToProps,
  mapDispatchToProps,
)(LoginForm)

export default LoginFormContainer;
