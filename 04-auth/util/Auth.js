import axios from 'axios';

const API_KEY = 'AIzaSyB0cIU3AAaH92GMEKi_xWeghIjhscPuHxc';

async function authenticate(mode, email, password) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;
  const response = await axios.post(url, {
    email,
    password,
    returnSecureToken: true,
  });
}

async function createUser(email, password) {
  await authenticate('signUp', email, password);
}

async function login(email, password) {
  await authenticate('signInWithPassword', email, password);
}

export { createUser, login };
