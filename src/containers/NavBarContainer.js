import { connect } from 'react-redux';
import NavBar from '../components/NavBar';
import { withRouter } from 'react-router';
import {recoveremail} from '../actions/user';

const mapStateToProps = (state) => ({
  data: state.LoginFormReducer,
})


const NavBarContainer = connect (
  mapStateToProps
)(NavBar)

export default withRouter(NavBarContainer);
