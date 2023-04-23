import axios from 'axios';

const API_KEY = ''; // Get from firebase for the app to work

async function authenticate(mode, email, password) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;
  const response = await axios.post(url, {
    email,
    password,
    returnSecureToken: true,
  });
  const { idToken: token } = response.data;
  return token;
}

function createUser(email, password) {
  return authenticate('signUp', email, password);
}

function login(email, password) {
  return authenticate('signInWithPassword', email, password);
}

export { createUser, login };
