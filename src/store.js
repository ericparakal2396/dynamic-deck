import { createStore, applyMiddleware, combineReducers } from 'redux';
import {createLogger} from 'redux-logger';
import { reducer as formReducer } from 'redux-form';
import  promise  from 'redux-promise-middleware';
import LoginFormReducer from './reducers/LoginFormReducer';


export default createStore(
  combineReducers({
    LoginFormReducer,
    form: formReducer,
  }),
  applyMiddleware(
    createLogger(),
    promise()
  )
);
