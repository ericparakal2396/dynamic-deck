import axios from 'axios';

export function recoveremail() {

  return {
    type: 'RECOVER_EMAIL',
  };
}

export function login(user) {
  return {
    type: 'LOGIN',
    payload: axios.get('http://ec2-54-251-185-219.ap-southeast-1.compute.amazonaws.com:80/api/public/users/login', {
      params:{
      email:user.email,
      password:user.password,
    }
  })
}
}

export function logout() {
  return {
    type: 'LOGOUT',
  }
}
