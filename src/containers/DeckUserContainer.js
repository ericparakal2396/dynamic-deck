import { connect } from 'react-redux';
import DeckUser from '../components/DeckUser';
import {logout} from '../actions/user';

const mapStateToProps = (state) => ({
  data: state.LoginFormReducer,
})

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => {
      dispatch(logout())
    }
  }
}


const DeckUserContainer = connect (
  mapStateToProps,
  mapDispatchToProps,
)(DeckUser)

export default DeckUserContainer;
