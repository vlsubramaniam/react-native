import { View, StyleSheet } from 'react-native';

import Colors from '../../constants/colors';

function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary800,
    marginTop: 36,
    marginHorizontal: 24,
    padding: 16,
    borderRadius: 8,
    elevation: 4, // Works only for Android - boxShadow CSS alternative
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});

export default Card;
