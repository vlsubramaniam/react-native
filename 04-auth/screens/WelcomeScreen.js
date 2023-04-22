import { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
import { AuthContext } from '../store/AuthContext';

function WelcomeScreen() {
  const [message, setMessage] = useState('');
  const authCtx = useContext(AuthContext);

  useEffect(() => {
    axios
      .get(
        'https://react-native-e713e-default-rtdb.firebaseio.com/message.json?auth=' +
          authCtx.token
      )
      .then((response) => setMessage(response.data));
  }, [authCtx.token]);

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text>You authenticated successfully!</Text>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  message: {
    color: '#2f0cf5',
  },
});
