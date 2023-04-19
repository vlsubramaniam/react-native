import { useState } from 'react';

import AuthContent from '../components/auth/AuthContent';
import { createUser } from '../util/Auth';
import LoadingOverlay from '../components/ui/LoadingOverlay';

function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  async function signupHandler({ email, password }) {
    setIsAuthenticating(true);
    await createUser(email, password);
    setIsAuthenticating(false);
  }
  if (isAuthenticating) {
    return <LoadingOverlay message='Creatig user....' />;
  }
  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;
