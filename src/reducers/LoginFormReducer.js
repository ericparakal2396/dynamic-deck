const initialState = {
  recoverPassword:false,
  login:null,
  logout:false,
  loading: false,
  error: null,
  userData:{},
}

function LoginFormReducer(state=initialState,action){
  let userData={};

  switch (action.type) {

    case 'RECOVER_EMAIL':
      return {...state, loading: false, recoverPassword: true};

    case 'LOGIN_PENDING':
      return {...state, loading: true, login:false, error: null, recoverPassword: false, userData:[]};


    case 'LOGIN_FULFILLED':
      userData = action.payload.data;
      console.log(userData.status);
      //console.log(size);

      if(userData.status === 'success')
      {
        return {...state, loading: false, userData ,login: 'accepted', error: null, recoverPassword: false};
      }

      else
      {
        //console.log('Login Successful');
        return {...state, loading: false, userData ,login: 'rejected', error: null, recoverPassword: false};
      }



    case 'LOGIN_REJECTED':
      return {...state, loading: false, error: `${action.payload.message}`}


    case 'LISTDECK_PENDING':
      return {...state,loading:true}

    case 'LISTDECK_FULFILLED':
      userData = action.payload.data;
      return {...state, loading: false, userData };

    case 'LISTDECK_REJECTED':
      return {...state, loading: false, error: `${action.payload.message}`}

    case 'LOGOUT':
      return {...state, loading:false, login: null, logout:true};

    default:
      return state
  }
}

export default LoginFormReducer;
