import { useState, useContext } from 'react';
import { Alert } from 'react-native';

import AuthContent from '../components/auth/AuthContent';
import { createUser } from '../util/Auth';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { AuthContext } from '../store/AuthContext';

function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const authCtx = useContext(AuthContext);

  async function signupHandler({ email, password }) {
    setIsAuthenticating(true);
    try {
      const token = await createUser(email, password);
      authCtx.authenticate(token);
    } catch (e) {
      Alert.alert('Authentication Failure', 'Could not create user!!!');
      setIsAuthenticating(false);
    }
  }

  if (isAuthenticating) {
    return <LoadingOverlay message='Creatig user....' />;
  }
  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;
