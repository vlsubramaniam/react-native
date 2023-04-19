import axios from 'axios';

const API_KEY = 'AIzaSyB0cIU3AAaH92GMEKi_xWeghIjhscPuHxc';

async function createUser(email, password) {
  const response = await axios.post(
    `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
    {
      email,
      password,
      returnSecureToken: true,
    }
  );
}

export { createUser };
