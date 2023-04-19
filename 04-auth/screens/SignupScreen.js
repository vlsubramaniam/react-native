import { useState } from 'react';
import { Alert } from 'react-native';

import AuthContent from '../components/auth/AuthContent';
import { createUser } from '../util/Auth';
import LoadingOverlay from '../components/ui/LoadingOverlay';

function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  async function signupHandler({ email, password }) {
    setIsAuthenticating(true);
    try {
      await createUser(email, password);
    } catch (e) {
      Alert.alert('Authentication Failure', 'Could not create user!!!');
    }
    setIsAuthenticating(false);
  }

  if (isAuthenticating) {
    return <LoadingOverlay message='Creatig user....' />;
  }
  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;
